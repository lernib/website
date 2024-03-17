import { Octokit } from '@octokit/rest';
import { cac } from 'cac';

const cli = cac('autopr');

cli.option('--github <token>', 'GitHub authentication token');

const parsed = cli.parse();

const octokit = new Octokit({
  auth: parsed.options.github
});

function env_required(key: string): string {
  const res = process.env[key];

  if (!res) {
    throw new Error(`Environment variable ${key} not set.`);
  }

  return res;
}

const [REPO_OWNER, REPO_NAME] = env_required('GITHUB_REPOSITORY').split('/');
const BRANCH = env_required('GITHUB_REF_NAME');
const ROOT = env_required('GITHUB_WORKSPACE');

async function get_all_branches() {
  await octokit.request('GET /repos/{owner}/{repo}/branches', {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}
