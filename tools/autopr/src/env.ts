import { config as dotenvConfig } from 'dotenv';

export function loadenv() {
  const res = dotenvConfig();

  if (res.error) {
    console.error(res.error);
    process.exit(1);
  }
}

export function getenv(name: string): string {
  const res = process.env[name];

  if (!res) {
    throw new Error(`Environment variable ${name} not set.`);
  }

  return res;
}
