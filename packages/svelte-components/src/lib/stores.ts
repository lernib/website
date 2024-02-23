import { writable } from 'svelte/store'
import type { CognitoIdTokenPayload } from 'aws-jwt-verify/jwt-model';

export const authStore = writable<CognitoIdTokenPayload | null>();
