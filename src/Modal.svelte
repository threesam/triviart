<script>
  import { fly, fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<style lang="scss">
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-content: center;
    .modal {
      background: white;
      padding: 20px;
      border-radius: 15px;
    }
  }
</style>

<div class="modal-bg" transition:fade>
  <div class="modal" transition:fly={{ y: 200 }}>
    <button on:click={() => dispatch('close')}>Close</button>
    <slot />
  </div>
</div>
