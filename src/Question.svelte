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
      color: '#550000',
    }
  })
  let allAnswers = [
    ...answers,
    {
      answer: question.correct_answer,
      correct: true,
      color: '#005500',
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
    background: lightgray;
    color: black;
    margin: 0.5rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
  }
  .card {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.69);
    position: absolute;
    max-width: 100%;
    background: rgb(51, 51, 51);
    padding: 2rem;
    line-height: 1.5;
    border-radius: 1rem;
    color: white;
  }
</style>

<div class="card">
  <h3>
    {@html question.question}
  </h3>

  {#each allAnswers as answer}
    <button
      disabled={isAnswered}
      style={isAnswered ? `background: ${answer.color}` : ''}
      on:click={() => checkAnswer(answer.correct)}>
      {@html answer.answer}
    </button>
  {/each}

  {#if isAnswered}
    <div>
      <button on:click={nextQuestion}>Next Question</button>
    </div>
  {/if}
</div>
