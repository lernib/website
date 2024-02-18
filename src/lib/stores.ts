import { writable } from 'svelte/store'
import type { CognitoIdTokenPayload } from 'aws-jwt-verify/jwt-model';
import type { Notify } from './types';


export const authStore = writable<CognitoIdTokenPayload | null>();
export const notifyStore = writable<Notify[]>([]);
