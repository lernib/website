import { globalCtx } from "./env";
import * as fs from 'fs/promises';
import * as path from 'path';

async function config_path(): Promise<string> {
  return path.join((await globalCtx()).root, '.github/autopr.conf');
}

export async function config(): Promise<string> {
  const contents = await fs.readFile(await config_path(), 'utf-8');

  return contents;
}
