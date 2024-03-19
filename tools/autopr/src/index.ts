import * as github from '@actions/github';
import { cac } from 'cac';
import { globalCtx } from './env';
import { config, getAffects } from './config';

await globalCtx();

const cli = cac('autopr');
cli.option('github <token>', 'GitHub authentication token');
cli.option('simulate', 'Simulate pull requests instead of actually doing it');

const parsed = cli.parse();

const auth: string = process.env.AUTOPR_PAT || parsed.options.github;
const simulate: boolean = parsed.options.simulate

const ghub = github.getOctokit(auth);
const gcontext = github.context;

async function get_last_pr() {
  // Get pull request with correct sha
  const resp = await ghub.rest.pulls.list({
    owner: gcontext.repo.owner,
    repo: gcontext.repo.repo,
    state: 'closed',
    sort: 'updated',
    direction: 'desc',
    per_page: 100
  });

  const pull = resp.data.find(p => p.merge_commit_sha == gcontext.sha);
  return pull || null;
}

async function get_all_branches() {
  return ghub.request('GET /repos/{owner}/{repo}/branches', {
    owner: gcontext.repo.owner,
    repo: gcontext.repo.repo
  });
}

async function fully_merge_pr(head: string, base: string) {
  if (simulate) {
    console.info(`[GITSIM] Create pull request ${head} => ${base}`);
    return;
  }

  const pr = await ghub.rest.pulls.create({
    owner: gcontext.repo.owner,
    repo: gcontext.repo.repo,
    head,
    base,
    title: `AutoPR ${head} => ${base}`
  });

  // null does NOT mean 'not mergeable', only false means that
  if (pr.data.mergeable === false) {
    console.warn(`Could not merge sync-fork: ${head} => ${base}`);
  } else {
    await ghub.rest.pulls.merge({
      owner: gcontext.repo.owner,
      repo: gcontext.repo.repo,
      pull_number: pr.data.number
    }).then(() => {
      console.info(`Successfully merged: ${head} => ${base}`)
    }).catch(() => {
      console.warn(`Could not merge sync-fork: ${head} => ${base}`);
    })
  }
}

async function on_push() {
  // Get config
  const cfg = await config();

  // Get last pull request
  const last_pr = await get_last_pr();
  const pr_base = last_pr?.base;

  // Pull request base must match current branch
  if (pr_base?.ref != gcontext.ref) {
    return null;
  }

  const branches = await get_all_branches()
    .then(p => p.data);

  const names = branches.map(p => p.name);
  const affects = getAffects(cfg, names, pr_base.ref)
    .filter(name => name != last_pr?.head.ref);
  
  console.log(`Creating sync-pull requests for ${affects.length} branches`)

  if (simulate) {
    console.warn(`Push event is simulated, no sync-pulls sent to GitHub`);
  }

  // Create pull requests
  for (let name of affects) {
    await fully_merge_pr(pr_base.ref, name);
  }
}

await on_push();
