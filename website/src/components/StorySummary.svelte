<script lang="ts">
  import { Story } from '$lib/types';
  import * as z from 'zod';

  export let story: z.infer<typeof Story>;
</script>

<div class="student">
  <div class="top">
    {#if 'theme' in story}
      <blockquote>
        {story.theme}
      </blockquote>
    {/if}
  </div>
  <span class="student-name">{story.student}</span>
  <span class="student-subject">{story.subject}</span>
</div>

<style lang="scss">
  blockquote {
    text-align: center;
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: 200;

    &::before {
      content: '"'
    }

    &::after {
      content: '"'
    }
  }

  .student {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      aspect-ratio: 1 / 1;
      padding: 1rem;
      border-radius: 1rem;

      border: 1px solid black;
    }

    .student-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .top {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
</style>
