<script lang="ts">
  export let name: string = "";
</script>

<div>
  <span class={name ? "name" : ""}>
    {name}
  </span>
  <hr />
  <p>
    <slot />
  </p>
</div>

<style lang="scss">
  @use "@lernib/sass-styling/config";
  @use "sass:color";

  div {
    max-width: 350px;
    font-size: 1.5rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    background-color: color.adjust(config.$color1, $lightness: -75%);
    color: config.$color1;

    font-size: 1.25rem;
    justify-content: start;
    align-items: start;

    align-self: stretch;

    hr {
      width: 100%;
      margin: 1rem 0;
    }

    .name {
      font-weight: bold;
      display: block;

      @include config.for-size(phone-only) {
        padding-top: 2rem;
      }
    }
  }
</style>
