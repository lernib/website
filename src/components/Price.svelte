<script lang="ts">
  export let price: number;
  export let name: string;
</script>

<div class="price">
  <h2>
    ${price}
  </h2>

  <span>
    {name}
  </span>

  <p>
    <slot />
  </p>
</div>

<style lang="scss">
  @use '/src/lib/config';

  .price {
    width: 100%;
    height: 20rem;
    background-color: config.$color1_2;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 2rem;

    h2 {
      font-weight: 900;
      font-size: 2.25rem;
      color: config.$color2;
      margin-bottom: 2rem;
    }

    span {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      margin-top: 1rem;
    }
  }
</style>