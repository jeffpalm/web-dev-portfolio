<script lang="ts">
  import NavBar from "./lib/components/NavBar.svelte";
  import HomePage from "./lib/pages/HomePage.svelte";
  import AboutPage from "./lib/pages/AboutPage.svelte";
  import SkillsPage from "./lib/pages/SkillsPage.svelte";
  import ProjectsPage from "./lib/pages/ProjectsPage.svelte";
  import ContactPage from "./lib/pages/ContactPage.svelte";
  import convertHue from "./lib/shared/convertHue";

  let docHeight = $state(document.body.clientHeight);
  let scrollY = $state(window.scrollY);
  let startHue = $state(Math.floor(Math.random() * 360));
  let hue = $derived(convertHue(scrollY, 0, docHeight, startHue));
  let isNavVisible = $derived(scrollY > 64);

  const updateHeight = (node: HTMLElement) => {
    docHeight = node.clientHeight;
  };

  const updateScroll = () => {
    scrollY = window.scrollY;
  };

  const newHue = () => {
    startHue = Math.floor(Math.random() * 360);
  };
</script>

<svelte:window on:scroll={updateScroll} />

<main use:updateHeight>
  <HomePage />
  {#if isNavVisible}
    <NavBar
      dynamicHue={hue}
      {newHue}
      --bg-color={`hsla(${hue}, 50%, 30%, 0.8`}
    />
  {:else}
    <div style="height: 64px;"></div>
  {/if}
  <AboutPage />
  <SkillsPage />
  <ProjectsPage />
  <ContactPage />
</main>

<style>
  :global(:root) {
    --primary-color: #02f2b2;
    --secondary-color: #9bb1ff;
    --primary-bg: #222;
    --secondary-bg: #59656f;
    --alt-bg: #333;

    --spacing: 1rem;

    --type-primary: "Poppins", sans-serif;

    color: #fff;
    font-family: var(--type-primary), sans-serif;
  }

  main {
    background-color: var(--primary-bg);
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
