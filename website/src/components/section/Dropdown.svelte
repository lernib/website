<script lang="ts">
  export let className = "";
</script>

<div class="dropdown {className}">
  <slot name="focus" />
  <div class="dropdown-contents">
    <slot />
  </div>
</div>

<style lang="scss">
  @use '@lernib/sass-styling/config';
  @use 'sass:color';

  .dropdown {
    position: relative;
    display: block;

    &:hover .dropdown-contents {
      display: flex;
    }
  }

  .dropdown-contents {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: config.$color1_2;
    padding: 1rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display: none;
    flex-direction: column;
    justify-content: start;
    align-items: end;
  }
</style>
