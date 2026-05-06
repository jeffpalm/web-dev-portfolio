<script lang="ts">
  import type { NavLink } from "./types"
  import MenuIcon from "../icons/MenuIcon.svelte"

  type Props = {
    navLinks: NavLink[]
    activePage: string
    handleNavClick: (link: string) => () => void
  }

  let isMenuOpen = $state(false)

  const toggleOpen = () => {
    isMenuOpen = !isMenuOpen
  }

  let { navLinks, activePage, handleNavClick }: Props = $props()
</script>

<div class="mobile-toolbar">
  <button type="button" class="hamburger" onclick={toggleOpen}>
    <MenuIcon />
  </button>
  {#if isMenuOpen}
    {#each navLinks as { buttonText, link }, index}
      <button>link</button>
    {/each}
  {/if}
</div>

<style>
  .hamburger {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  .mobile-toolbar {
    display: flex;
    flex-direction: column;
  }
</style>
