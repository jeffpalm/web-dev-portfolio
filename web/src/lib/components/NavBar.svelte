<script lang="ts">
  import NavButton from "./NavButton.svelte";
  import Palmytree from "./Palmytree.svelte";
  import SideBar from "./SideBar.svelte";
  import { fade, fly } from "svelte/transition";

  type Props = {
    dynamicHue: number;
    newHue: () => void;
  };

  type NavLink = {
    buttonText: string;
    link: string;
  };

  const navLinks: NavLink[] = [
    { buttonText: "Home", link: "home" },
    { buttonText: "About", link: "about" },
    { buttonText: "Skills", link: "skills" },
    { buttonText: "Projects", link: "projects" },
    { buttonText: "Contact", link: "contact" },
  ];

  let activePage = $state("");
  let rotateTree = $state(false);

  const activePageListener = () => {
    for (const { link } of navLinks) {
      const element = document.getElementById(link);
      if (!element) continue;

      const { y, height } = element.getBoundingClientRect();

      if (y <= 0 && y + height > 0) {
        activePage = link;
        break;
      }
    }
  };

  const handleNavClick = (link: string) => () => {
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  let { dynamicHue, newHue }: Props = $props();

  const handlePalmytreeClick = () => {
    rotateTree = true;
    setTimeout(() => {
      rotateTree = false;
    }, 500);
    newHue();
  };
</script>

<svelte:window on:scroll={activePageListener} />

<nav class="nav-root" aria-label="main navigation" out:fade>
  <div class="nav-toolbar">
    {#each navLinks as { buttonText, link }, index}
      <NavButton
        --delay={index}
        {buttonText}
        onClick={handleNavClick(link)}
        isActive={activePage === link}
      />
    {/each}
  </div>
  <button
    type="button"
    class={`nav-logo${rotateTree ? " palmy-rotate" : ""}`}
    onclick={handlePalmytreeClick}
    aria-roledescription="button"
    aria-label="change color"
    in:fly={{ x: 100, delay: 1000 }}
  >
    <Palmytree variant="logo" />
  </button>
</nav>
<SideBar --bg-color={`hsla(${dynamicHue}, 50%, 30%, 0.8)`} />

<style>
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes slide-in {
    from {
      transform: scaleX(0);
      transform-origin: 0 0;
    }
    to {
      transform: scaleX(1);
      transform-origin: 0 0;
    }
  }

  .nav-root {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 64px;
    padding: 1rem;
    background-color: var(--bg-color, #ffffff50);
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform-origin: left;
    animation: 0.5s 1 slide-in;
  }

  .nav-toolbar {
    display: flex;
  }

  .nav-logo {
    height: 50px;
    width: 50px;
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

  .nav-logo:hover {
    cursor: pointer;
  }

  .palmy-rotate {
    animation: 0.5s 1 linear rotate;
  }
</style>
