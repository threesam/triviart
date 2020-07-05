<script>
  import { score } from './store.js'

  export let question
  export let nextQuestion

  let isCorrect
  let isAnswered = false
  let answers = question.incorrect_answers.map((answer) => {
    return {
      answer,
      correct: false,
      color: '10, 16, 8',
    }
  })
  let allAnswers = [
    ...answers,
    {
      answer: question.correct_answer,
      correct: true,
      color: '51, 85, 37',
    },
  ]
  shuffle(allAnswers)

  function shuffle(array) {
    // make array between -0.5 and 0.5, randomizing hack for sort
    array.sort(() => Math.random() - 0.5)
  }

  function checkAnswer(correct) {
    isCorrect = correct
    isAnswered = true
    if (correct) {
      score.update((val) => val + 1)
    }
  }
</script>

<style>
  button {
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background: var(--dark-grey);
    color: var(--black);
    transition: all 0.5s ease-in-out;
  }
  .card {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.69);
    /* position: absolute; */
    background: var(--black);
    padding: 2rem;
    margin: 2rem;
    line-height: 1.5;
    color: var(--white);
    border-radius: 1rem;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (min-width: 800px) {
    .buttons {
      grid-template-columns: 1fr 1fr;
    }
    .next-question {
      grid-column: span 2;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
</style>

<div class="card">
  <h3>
    {@html question.question}
  </h3>

  <div class="buttons">
    {#each allAnswers as answer}
      <button
        disabled={isAnswered}
        style={isAnswered ? `background: rgb(${answer.color})` : ''}
        on:click={() => checkAnswer(answer.correct)}>
        {@html answer.answer}
      </button>
    {/each}
    {#if isAnswered}
      <button class="next-question" on:click={nextQuestion}>
        Next Question
      </button>
    {/if}
  </div>

</div>
