export enum Timezone {
  EST = "nfive",
  CST = "nsix",
  MST = "nseven",
  PST = "neight",
  UNKNOWN = "na"
}

export interface ApiStudent {
  id: string,
  studentName: string,
  clientName: string,
  timezone: Timezone
}

export interface Notify {
  message: string;
  color: string;
}
