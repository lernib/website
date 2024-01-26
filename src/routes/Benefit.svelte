<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div>
  <img {src} alt="Benefit Icon" />
  <h1>{title}</h1>
  <slot />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    row-gap: 0.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
</style>