<script>
  import Category from './Category.svelte'

  import { onMount } from 'svelte'
  import { activeCategory } from './store.js'

  let categories = []

  onMount(() => getCategories())

  async function getCategories() {
    const res = await fetch('https://opentdb.com/api_category.php')
    const data = await res.json()
    categories = data.trivia_categories
    console.log()
  }
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: calc(100vh - 200px);
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }
</style>

<!-- <select bind:value={selected} name="categories" id="category-list">
    <option value="" selected>Choose category</option>
    {#each categories as category}
      <option value={category.id}>{category.name}</option>
    {/each}
  </select> -->
<div>
  {#each categories as category}
    <Category id={category.id}>{category.name}</Category>
  {/each}
</div>
