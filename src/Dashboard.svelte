<script>
  import DashboardItem from './DashboardItem.svelte'
  import { score } from './store'
  export let activeQuestion
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    text-align: center;
    height: 4rem;
  }

  h4 {
    font-size: 1.5rem;
  }
</style>

<div>
  <DashboardItem>
    <h3>Score</h3>
    <h4>{$score}</h4>
  </DashboardItem>
  <DashboardItem>
    <h3>Question</h3>
    <h4>{activeQuestion}</h4>
  </DashboardItem>
</div>
