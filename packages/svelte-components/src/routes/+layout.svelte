<script lang="ts">
  import '@lernib/sass-styling/global';
</script>

<div class="content">
  <slot />
</div>

<style lang="scss">
  :global(.sk-core) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .content {
    flex-grow: 1;
    align-self: stretch;
    padding: 1rem;
  }
</style>
