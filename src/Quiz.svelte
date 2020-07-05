<script>
  import Dashboard from './Dashboard.svelte'
  import { fade, blur, fly, slide, scale } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Question from './Question.svelte'
  import Modal from './Modal.svelte'

  // store
  import { score, activeCategory, showQuiz, showCategories } from './store.js'

  let activeQuestion = 0
  let isModalOpen = false

  onMount(getQuiz)

  async function getQuiz() {
    const url = `https://opentdb.com/api.php?amount=20&category=${$activeCategory}&type=multiple`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
  }

  function nextQuestion() {
    activeQuestion++
  }

  function resetQuiz() {
    isModalOpen = false
    score.set(0)
    activeQuestion = 0
    $showQuiz = true
    getQuiz()
  }

  function getCategories() {
    $showCategories = true
    $showQuiz = false
  }

  // reactive statement
  $: if ($score > 2) {
    isModalOpen = true
  }

  // reactive declaration
  $: questionNumber = activeQuestion + 1
</script>

<style>
  section {
    position: relative;
  }
  .fade-wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
  }
  h3 {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    text-transform: uppercase;
    background: linear-gradient(var(--black), rgba(0, 0, 0, 0));
    color: var(--dark-grey);
    text-shadow: 0 0.125rem rgba(var(--black-rgb), 0.69);
    cursor: pointer;
  }
  h3:hover {
    background: linear-gradient(var(--black), var(--black));
    transition: all 0.3s ease-in-out;
  }
  @media (min-width: 800px) {
    h3 {
      font-size: 2rem;
      height: 4rem;
    }
  }
</style>

<h3 on:click={getCategories}>Change Category</h3>
<section>
  <Dashboard {activeQuestion} />
  {#await getQuiz()}
    Loading...
  {:then data}

    {#each data.results as question, index}
      {#if index === activeQuestion}
        <div
          in:fly={{ x: -100, delay: 500 }}
          out:fly={{ x: 200 }}
          class="fade-wrapper">
          <Question {nextQuestion} {question} />
        </div>
      {/if}
    {/each}

  {/await}
</section>

<!-- MODAL -->
{#if isModalOpen}
  <Modal>
    <h2>You Won!</h2>
    <button on:click={resetQuiz}>Start Over</button>
  </Modal>
{/if}
