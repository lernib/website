import { globalCtx } from './env';
import { config, getAffects } from './config';


const context = await globalCtx();

const API = context.github.api;
const ACTCTX = context.github.context;
const OWNER = context.github.context.repo.owner;
const REPO  = context.github.context.repo.repo;

context.info(`Repository: ${OWNER}/${REPO}`);

type MergedPr = Awaited<ReturnType<typeof API.rest.pulls.list>>["data"][number]
async function get_merged_pr(): Promise<MergedPr | null> {
  // Get pull request with correct sha
  const resp = await API.rest.pulls.list({
    owner: OWNER,
    repo: REPO,
    state: 'closed',
    sort: 'updated',
    direction: 'desc',
    per_page: 100
  });

  const pull = resp.data.find(p => p.merge_commit_sha == ACTCTX.sha);
  return pull || null;
}

async function get_all_branches() {
  return API.request('GET /repos/{owner}/{repo}/branches', {
    owner: OWNER,
    repo: REPO
  });
}

async function fully_merge_pr(head: string, base: string) {
  if (context.simulate) {
    context.info(`[GITSIM] Create pull request ${head} => ${base}`);
    return;
  }

  const pr = await API.rest.pulls.create({
    owner: OWNER,
    repo: REPO,
    head,
    base,
    title: `AutoPR ${head} => ${base}`
  });

  // null does NOT mean 'not mergeable', only false means that
  if (pr.data.mergeable === false) {
    context.warn(`Could not merge sync-fork: ${head} => ${base}`);
  } else {
    await API.rest.pulls.merge({
      owner: OWNER,
      repo: REPO,
      pull_number: pr.data.number
    }).then(() => {
      context.info(`Successfully merged: ${head} => ${base}`)
    }).catch(() => {
      context.info(`Could not merge sync-fork: ${head} => ${base}`);
    })
  }
}

async function on_push() {
  context.info('Running push...')

  // Get config
  const cfg = await config();

  // Get last pull request
  const last_pr = await get_merged_pr();
  const pr_base = last_pr?.base;

  // Pull request base must match current branch
  if (pr_base?.ref != ACTCTX.ref) {
    return null;
  }

  const branches = await get_all_branches()
    .then(p => p.data);

  const names = branches.map(p => p.name);
  const affects = getAffects(cfg, names, pr_base.ref)
    .filter(name => name != last_pr?.head.ref);
  
  context.info(`Creating sync-pull requests for ${affects.length} branches`)

  if (context.simulate) {
    context.warn(`Push event is simulated, no sync-pulls sent to GitHub`);
  }

  // Create pull requests
  for (let name of affects) {
    await fully_merge_pr(pr_base.ref, name);
  }
}

await on_push();
