<script>
  export let id
  import { activeCategory } from './store'

  function updateActive() {
    activeCategory.set(id)
    console.log(id)
  }
</script>

<style>
  button {
    margin: 0;
  }
</style>

<button {id} on:click={updateActive}>
  <slot />
</button>
