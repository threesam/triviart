<script>
  import P5Canvas from './P5Canvas.svelte'
  import sketch from './navSketch'
</script>

<style>
  div {
    position: relative;
    display: grid;
    place-content: center;
    color: whitesmoke;
    overflow: hidden;
    height: 100px;
    background: green;
    width: 100vw;
  }
  h1 {
    position: relative;
    z-index: 10;
    padding: 1rem;
    font-size: 4rem;
  }
</style>

<div>
  <h1>zZart</h1>
  <P5Canvas id="navbar" {sketch} />
</div>
