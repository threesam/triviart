<script>
  export let id
  import { activeCategory, showCategories, showQuiz } from './store'

  function updateActive() {
    activeCategory.set(id)
    $showCategories = false
    $showQuiz = true
  }
</script>

<style>
  button {
    margin: 0 1rem;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    button {
      margin: 0 0;
    }
  }
</style>

<button {id} on:click={updateActive}>
  <slot />
</button>
