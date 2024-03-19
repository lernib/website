import { globalCtx } from "./env";
import * as fs from 'fs/promises';
import * as path from 'path';

interface Config {
  affects: Record<string, string>
}

let config: Config | undefined = undefined;

async function config_path(): Promise<string> {
  return path.join((await globalCtx()).root, '.github/autopr.json');
}

async function getConfig(): Promise<Config> {
  if (config) return config;

  const contents = await fs.readFile(await config_path(), 'utf-8');
  config = JSON.parse(contents);

  return getConfig();
}

type AffectsBranchFilter = (name: string) => boolean;
function affectsBranchFilter(affects: string[]): AffectsBranchFilter {
  const regexes = affects.map(s => new RegExp(s));

  const predicate = (name: string) => {
    for (let r of regexes) {
      if (r.test(name)) return true;
    }

    return false;
  }

  return predicate;
}

function getAffects(config: Config, branches: string[], cause: string): string[] {
  const affects = Object.entries(config.affects)
    .filter(([c, _]) => c == cause)
    .map(([_, eff]) => eff);
  
  const filter = affectsBranchFilter(affects);
  
  return branches
    .filter(filter);
}

export { getConfig as config, getAffects };
