<script lang="ts">
  import type { NavLink } from "./types";
  import NavButton from "./NavButton.svelte";

  type Props = {
    navLinks: NavLink[]
    activePage: string
    handleNavClick: (link: string) => () => void
  }

  let {
    navLinks,
    activePage,
    handleNavClick,
  }: Props = $props();
</script>

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

    .nav-toolbar {
        display: flex;
    }
</style>
