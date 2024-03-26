import * as z from 'zod'


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

export const StoryCommon = z.object({
  student: z.string(),
  subject: z.string()
});

export const Story = z.union([
  StoryCommon.extend({
    review: z.string()
  }),
  StoryCommon.extend({
    theme: z.string()
  }),
  StoryCommon.extend({
    project: z.string()
  })
]);
