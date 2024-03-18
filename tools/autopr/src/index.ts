import { Octokit } from '@octokit/rest';
import { cac } from 'cac';
import { getenv, globalCtx } from './env';
import { config } from './config';

await globalCtx();

const cli = cac('autopr');
cli.option('--github <token>', 'GitHub authentication token');

const parsed = cli.parse();
const auth: string = process.env.AUTOPR_PAT || parsed.options.github;

const octokit = new Octokit({
  auth
});

const [REPO_OWNER, REPO_NAME] = getenv('GITHUB_REPOSITORY').split('/');
// const BRANCH = env_required('GITHUB_REF_NAME');
// const ROOT = env_required('GITHUB_WORKSPACE');

console.info(`Repository owner: ${REPO_OWNER}`)
console.info(`Repository name: ${REPO_NAME}`)

async function get_all_branches() {
  return await octokit.request('GET /repos/{owner}/{repo}/branches', {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.data)
}

async function on_push() {
  console.info(await get_all_branches())
}

console.info(await config())
