<script>
  import Quiz from './Quiz.svelte'
  import Categories from './Categories.svelte'
  import Nav from './Nav.svelte'

  import { showQuiz, showCategories } from './store.js'
</script>

<style>
  :global(:root) {
    --green-rgb: 51, 85, 37;
    --white-rgb: 230, 233, 227;
    --light-grey-rgb: 182, 207, 174;
    --dark-grey-rgb: 140, 172, 137;
    --black-rgb: 10, 16, 8;

    --green: rgb(var(--green-rgb));
    --white: rgb(var(--white-rgb));
    --light-grey: rgb(var(--light-grey-rgb));
    --dark-grey: rgb(var(--dark-grey-rgb));
    --black: rgb(var(--black-rgb));
  }
  main {
    position: relative;
    margin: 0 auto;
  }
</style>

<Nav />
<main>

  {#if $showCategories}
    <Categories />
  {/if}

  {#if $showQuiz}
    <Quiz />
  {/if}

</main>
