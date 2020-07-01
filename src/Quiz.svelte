<script>
  import { fade, blur, fly, slide, scale } from 'svelte/transition'
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte'
  import Question from './Question.svelte'
  import Modal from './Modal.svelte'

  import { score, category } from './store.js'

  let quiz = getQuiz()
  let activeQuestion = 0
  let isModalOpen = false
  let categories = []

  let selected = null

  onMount(() => getCategories())

  async function getCategories() {
    const res = await fetch('https://opentdb.com/api_category.php')
    const data = await res.json()
    categories = data.trivia_categories
  }

  async function getQuiz() {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${selected}&type=multiple`,
    )
    const quiz = await res.json()
    return quiz
  }

  function nextQuestion() {
    activeQuestion++
  }

  function resetQuiz() {
    isModalOpen = false
    score.set(0)
    activeQuestion = 0
    quiz = getQuiz()
  }

  // reactive statement
  $: if ($score > 4) {
    isModalOpen = true
  }

  // reactive declaration
  $: questionNumber = activeQuestion + 1
</script>

<style>
  .container {
    max-width: 800px;
    padding: 1rem;
  }
  .fade-wrapper {
    margin: -1rem;
    padding: 0;
  }
</style>

<div class="container">

  <select bind:value={selected} name="categories" id="category-list">
    <option value="" selected>Choose category</option>
    {#each categories as category}
      <option value={category.id}>{category.name}</option>
    {/each}
  </select>

  <button on:click={resetQuiz}>Start New Quiz</button>

  <h3>My Score: {$score}</h3>
  <h4>Question #{questionNumber}</h4>

  {#await quiz}
    Loading...
  {:then data}

    {#each data.results as question, index}
      {#if index === activeQuestion}
        <div in:fly={{ x: -100 }} out:fly={{ x: 200 }} class="fade-wrapper">
          <Question {nextQuestion} {question} />
        </div>
      {/if}
    {/each}

  {/await}

</div>

{#if isModalOpen}
  <Modal on:close={resetQuiz}>
    <h2>You Won!</h2>
    <p>Congratulations</p>
    <button on:click={resetQuiz}>Start Over</button>
  </Modal>
{/if}
