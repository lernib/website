<script lang="ts">
  import '@lernib/sass-styling/fixes'

  export let show = false;

  let modal: HTMLDivElement;

  $: modalStyle = show ? 'block' : 'none';

  const hideModal = () => {
    show = false;
  }
</script>

<div class="modal" bind:this={modal} style="display: {modalStyle}">
  <div class="modal-content">
    <div class="clearfix">
      <button class="close" on:click={hideModal}>&times;</button>
    </div>
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
    clear: both;
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
    font-size: 28px;
    font-weight: bold;
    float: right;
  
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
</style>
