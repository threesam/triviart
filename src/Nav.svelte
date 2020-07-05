<script>
  import P5Canvas from './P5Canvas.svelte'
  import sketch from './sketches/navSketch'
</script>

<style>
  div {
    position: relative;
    display: grid;
    place-content: center;
    color: var(--white);
    overflow: hidden;
    height: 100px;
    background: var(--black);
    width: 100vw;
  }
  h1 {
    position: relative;
    z-index: 10;
    padding: 0.5rem;
    font-size: 4rem;
    color: var(--green);
    border-radius: 100%;
  }
  h1:hover {
    text-shadow: -0.5rem -0.5rem 0.5rem var(--light-grey),
      0.5rem 0.5rem 0.5rem var(--dark-grey);
    transition: all 0.5s ease-in-out;
  }
</style>

<div>
  <h1>?</h1>
  <P5Canvas id="navbar" {sketch} />
</div>
