<script lang="ts">
  import { localWebresAsset } from "$lib/config";
</script>

<footer>
  <div class="n1">
    <img src={localWebresAsset("/logo128_white.png")} alt="logo" />
    <p>
      Connect with excellent tutors on our
      platform. Learn the way you want, wherever
      and however you like.
    </p>
  </div>
  <div class="n2">
    <h2>Browse</h2>
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/contact">Contact Us</a>
  </div>
  <div class="n3">
    <h2>Services</h2>
    <a href="/pricing">Pricing</a>    
  </div>
  <div class="n4">
    <h2>Contact</h2>
  </div>
</footer>

<style lang="scss">
  @use '@lernib/sass-styling/config';

  footer {
    background-color: config.$color2;
    height: fit-content;
    min-height: 10rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: config.$color1;
    padding: 3rem;
    column-gap: 5rem;
    row-gap: 5rem;

    @include config.for-size(tablet-portrait-up) {
      width: calc(100% - 20rem);
      flex-direction: row;
      padding: 3rem 10rem 6rem;
    }

    h2 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      width: 100%;
      align-self: stretch;

      &:not(:first-child) {
        row-gap: 1rem;
      }
    }

    .n1 {
      img {
        height: 2rem;
      }

      p {
        margin-top: 1rem;
      }
    }
  }
</style>