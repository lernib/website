import { globalCtx } from "./env";
import * as fs from 'fs/promises';
import * as path from 'path';

interface Config {
  affects: Record<string, string>
}

async function config_path(): Promise<string> {
  return path.join((await globalCtx()).root, '.github/autopr.json');
}

export async function config(): Promise<Config> {
  const contents = await fs.readFile(await config_path(), 'utf-8');

  return JSON.parse(contents);
}
