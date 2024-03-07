import { notifyStore } from "./stores";

export function createNotification(message: string, color: string) {
  notifyStore.update((notifs) => [...notifs, {
    message,
    color
  }]);
}
