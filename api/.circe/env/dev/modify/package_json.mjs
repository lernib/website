import { readFile, writeFile } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const SCRIPT_PATH = dirname(fileURLToPath(import.meta.url))
const PACKAGE_JSON_PATH = resolve(SCRIPT_PATH, '../../../../package.json')

let contents = await readFile(PACKAGE_JSON_PATH).then((res) => JSON.parse(res))
delete contents.devDependencies

await writeFile(PACKAGE_JSON_PATH, JSON.stringify(contents, undefined, 2))
