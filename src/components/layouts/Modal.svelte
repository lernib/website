<script lang="ts">
  export let show = false;

  let modal: HTMLDivElement;

  $: show && showChanged();

  const showChanged = () => {
    modal.style.display = show ? 'block' : 'none';
  }

  const hideModal = () => {
    show = false;
    showChanged();
  }
</script>

<div class="modal" bind:this={modal}>
  <div class="modal-content">
    <button class="close" on:click={hideModal}>&times;</button>
    <slot />
  </div>
</div>

<style lang="scss">
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #0006;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
</style>
