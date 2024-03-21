<script lang="ts">
    import { localWebresAsset } from "$lib/config";

  export let name: string = "";
</script>

<div>
  <span class={name ? "name" : ""}>
    {name}
    <img
      class="stars"
      src={localWebresAsset('/five_stars.png')}
      alt="five stars"
    />
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
    background-color: color.adjust(config.$color1, $lightness: -20%);
    color: black;

    font-size: 1.25rem;
    justify-content: start;
    align-items: start;

    align-self: stretch;

    hr {
      width: 100%;
      margin: 1rem 0;
    }

    .name {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;

      font-weight: bold;

      @include config.for-size(phone-only) {
        padding-top: 2rem;
      }
    }
  }

  .stars {
    display: block;
    letter-spacing: 0.5ch;
    height: 1.25em;
  }
</style>
