<script>
  import Home from './components/Home.svelte'
  import About from './components/About.svelte'
  import Projects from './components/Projects.svelte'
  import Languages from './components/Languages.svelte'

  import P5Canvas from './components/P5Canvas.svelte'
  import sketch from './components/sketch'
</script>

<style>
  :global(:root) {
    --rgb-white: 245, 245, 236;
    --rgb-black: 10, 10, 8;
    --rgb-light-grey: 152, 150, 164;
    --rgb-dark-grey: 42, 40, 48;
    --rgb-yellow: 252, 252, 48;

    --white: rgb(var(--rgb-white));
    --black: rgb(var(--rgb-black));
    --light-grey: rgb(var(--rgb-light-grey));
    --dark-grey: rgb(var(--rgb-dark-grey));
    --yellow: rgb(var(--rgb-yellow));
    --shadow: rgba(20, 20, 20, 0.69);
  }

  main {
    background: var(--light-grey);
  }
</style>

<main>
  <P5Canvas id="p5-home" {sketch} />
  <Home />
  <About />
  <Projects />
  <Languages />
</main>
