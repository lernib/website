<script lang="ts">
  export let message: string;
</script>

<span class="notification">
  {message}
</span>

<style lang="scss">
  @use '/src/lib/animation';
  @use '/src/lib/config';

  .notification {
    display: block;
    visibility: hidden;
    border-radius: 1rem;
    background-color: #afa;
    width: fit-content;
    padding: 0.5em 2.5em;
    font-weight: bold;
    font-size: 1.5rem;
    position: relative;
    left: 50%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    @include animation.timeline {
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

      @include animation.tween(0s, (
        top: 100%,
        transform: translate(-50%, 0%),
      ));
      @include animation.tween(0.2s, (
        top: calc(100% - 1.5rem),
        transform: translate(-50%, -100%),
        visibility: visible
      ));
      @include animation.tween(3s, (
        top: calc(100% - 1.5rem),
        transform: translate(-50%, -100%)
      ));
      @include animation.tween(0.2s, (
        top: 100%,
        transform: translate(-50%, 0%)
      ));
    }
  }
</style>
