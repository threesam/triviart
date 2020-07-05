<script>
  import Category from './Category.svelte'

  import { onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'
  import { activeCategory } from './store.js'

  let categories = []

  onMount(() => getCategories())

  async function getCategories() {
    const res = await fetch('https://opentdb.com/api_category.php')
    const data = await res.json()
    data.trivia_categories.forEach((category) => {
      if (category.name.includes(':')) {
        category.name = category.name.split(': ')[1]
      }
      categories.push(category)
    })
    categories.sort((a, b) => a - b)
    return categories
  }
</script>

<style>
  section {
    position: absolute;
    width: 100%;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    background: var(--green);
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    height: calc(100vh - 200px);
    grid-gap: 1rem;
  }
  h3 {
    width: 100%;
    font-size: 1rem;
    height: 3rem;
    text-align: center;
    padding: 1rem;
    text-transform: uppercase;
    background: linear-gradient(var(--black), rgba(0, 0, 0, 0));
    color: var(--green);
    text-shadow: 0 0.125rem rgba(var(--black-rgb), 0.69);
  }
  @media (min-width: 800px) {
    div {
      padding: 0 1rem;
    }
    h3 {
      font-size: 2rem;
      height: 4rem;
    }
  }
</style>

<section>
  <h3>Choose Category</h3>
  {#await getCategories()}
    loading...
  {:then categories}
    <div in:slide out:fade>
      {#each categories as category}
        <Category id={category.id}>{category.name}</Category>
      {/each}
    </div>
  {/await}
</section>
