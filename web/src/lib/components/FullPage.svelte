<script lang="ts">
  import { type Snippet } from "svelte"
  import { fade } from "svelte/transition"
  import { visibility } from "../shared/global"

  interface Props {
    id: string
    children?: Snippet
    altBg?: boolean
    centered?: boolean
  }

  let isVisible = $state(false)

  let { id, altBg = false, centered = false, children }: Props = $props()

  const visible = (node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const lastEntry = $visibility.peek()
        const isCurrentlyVisible = $visibility.contains(id)
        if (entry.isIntersecting && !isCurrentlyVisible) {
          isVisible = true
          visibility.update((s) => {
            s.push(id)
            return s
          })
        }
        if (lastEntry === id && !entry.isIntersecting) {
          isVisible = false
          visibility.update((s) => {
            s.pop()
            return s
          })
        }
      },
      {
        threshold: 0,
      },
    )
    observer.observe(node)
  }
</script>

<div {id} class={`full-page${altBg ? " alt-bg" : ""}`} use:visible>
  {#if isVisible}
    <div
      class="page-container glass"
      style={`${centered ? "justify-content: center;" : ""}`}
      transition:fade
    >
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>

<style>
  .full-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: calc(1rem + 64px) 1rem 1rem calc(1rem + 64px);
  }

  .page-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .glass {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow:
      inset -0.75px -0.5px rgba(255, 255, 255, 0.1),
      inset + 0.75px +0.5px rgba(255, 255, 255, 0.025),
      3px 2px 10px rgba(0, 0, 0, 0.25),
      inset 0px 0px 10px 5px rgba(255, 255, 255, 0.025),
      inset 0px 0px 40px 5px rgba(255, 255, 255, 0.025);
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    border: 2px ridge rgba(50, 50, 50, 0.5);
  }

  .alt-bg {
    /*background-color: var(--alt-bg);*/
  }
</style>
