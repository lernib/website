import * as aG from '@actions/github';
import * as aC from '@actions/core';
import * as fs from 'fs/promises';
import * as path from 'path';
import { cac } from 'cac';
import { config as dotenvConfig } from 'dotenv';


const actions = {
  github: aG,
  core: {
    ...aC,
    getInputSafe(name: string, options?: aC.InputOptions): string | undefined {
      const val = aC.getInput(name, options);

      if (val === '') {
        return undefined;
      }

      return val;
    }
  }
}

interface GlobalCtx {
  root: string,
  local: boolean,
  simulate: boolean,
  github: {
    api: ReturnType<typeof actions.github.getOctokit>,
    context: typeof actions.github.context
  },

  /* Loggers */
  log: typeof actions.core.info,
  info: typeof actions.core.info,
  warn: typeof actions.core.warning,
  error: typeof actions.core.error
}

let globalCtx: GlobalCtx | undefined = undefined;

async function init_globalCtx(): Promise<GlobalCtx> {
  // Environment variables need to be loaded first
  loadenv();

  const cli = cac('autopr');
  cli.option('simulate', 'Simulate pull requests instead of actually doing it');
  const parsed = cli.parse();

  const local: boolean = !process.env.CI;
  const githubPat: string | undefined =
    local
    ? process.env.AUTOPR_PAT
    : actions.core.getInputSafe('github-token');
  
  if (!githubPat) {
    actions.core.error('No GitHub actions token provided');
    process.exit(1);
  }

  return {
    // The root of the repository is the same folder with the package-lock.json in it
    root: process.env.GITHUB_WORKSPACE || await package_lock_json_dir(),
    github: {
      api: actions.github.getOctokit(githubPat),
      context: actions.github.context
    },
    local,
    simulate: parsed.options.parsed,

    log: actions.core.info,
    info: actions.core.info,
    warn: actions.core.warning,
    error: actions.core.error
  };
}

function loadenv() {
  const res = dotenvConfig();

  // Give error when local, make this dynamic somehow
  // if (res.error) {
  //   console.error(res.error);
  //   process.exit(1);
  // }
}

export function getenv(name: string): string {
  const res = process.env[name];

  if (!res) {
    throw new Error(`Environment variable ${name} not set.`);
  }

  return res;
}

async function file_exists(path: string): Promise<boolean> {
  try {
    await fs.stat(path);
    return true;
  } catch {
    return false;
  }
}

async function package_lock_json_dir(): Promise<string> {
  // Folder with running file in it
  let current = __dirname;
  const root = path.parse(current).root;

  while (
    !await file_exists(path.join(current, 'package-lock.json')) &&
    current != root
  ) {
    current = path.resolve(current, '../');
  }

  return current;
}

async function get_globalCtx(): Promise<GlobalCtx> {
  if (globalCtx) return globalCtx;

  globalCtx = await init_globalCtx();
  return globalCtx;
}

export { get_globalCtx as globalCtx };
