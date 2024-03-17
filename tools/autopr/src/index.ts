import { Octokit } from '@octokit/rest';
import { cac } from 'cac';

const cli = cac('autopr');

cli.option('--github <token>', 'GitHub authentication token');

const parsed = cli.parse();

const octokit = new Octokit({
  auth: parsed.options.github
})


