<script>
  import { fly, fade } from 'svelte/transition'
  import P5Canvas from './P5Canvas.svelte'
  import sketch from './sketches/sketch.js'
</script>

<style lang="scss">
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(var(--dark-grey-rgb), 0.8);
    display: grid;
    place-content: center;
    .modal {
      display: grid;
      place-content: center;
      background: white;
      padding: 2rem;
      margin: 1rem;
      border-radius: 15px;
      z-index: 10;
    }
  }
</style>

<div class="modal-bg" transition:fade>
  <div class="modal" transition:fly={{ y: 200 }}>
    <slot />
  </div>
  <P5Canvas id="p5-home" {sketch} />
</div>
