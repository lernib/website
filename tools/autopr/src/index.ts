import * as github from '@actions/github';
import { cac } from 'cac';
import { getenv, globalCtx } from './env';
import { config } from './config';

await globalCtx();

const cli = cac('autopr');
cli.option('github <token>', 'GitHub authentication token');
cli.option('last-pr <number>', 'Number of the last pull request');

const parsed = cli.parse();
const auth: string = process.env.AUTOPR_PAT || parsed.options.github;

const ghub = github.getOctokit(auth);
const gcontext = github.context;

console.info(`Repository owner: ${gcontext.repo.owner}`)
console.info(`Repository name: ${gcontext.repo.repo}`)

async function get_all_branches() {
  return await ghub.request('GET /repos/{owner}/{repo}/branches', {
    owner: gcontext.repo.owner,
    repo: gcontext.repo.repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then((res) => res.data)
}

async function on_push() {
  console.info(await get_all_branches())
}

console.info(await config())

await on_push();
