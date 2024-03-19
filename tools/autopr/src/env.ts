import { config as dotenvConfig } from 'dotenv';
import * as fs from 'fs/promises';
import * as path from 'path';

interface GlobalCtx {
  root: string
}

let globalCtx: GlobalCtx | undefined = undefined;

async function init_globalCtx(): Promise<GlobalCtx> {
  // Environment variables need to be loaded first
  loadenv();
  
  return {
    // The root of the repository is the same folder with the package-lock.json in it
    root: await package_lock_json_dir()
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
