<script lang="ts">
  import { type Snippet } from "svelte"
  import { fade } from "svelte/transition"
  import { visibility } from "../shared/global"

  interface Props {
    id: string
    children: Snippet
    altBg?: boolean
    centered?: boolean
    noMargin?: boolean
  }

  let isVisible = $state(false)

  let {
    id,
    altBg = false,
    centered = false,
    noMargin = false,
    children,
  }: Props = $props()

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

<div
  {id}
  class={`full-page${altBg ? " alt-bg" : ""}${noMargin ? "" : " margin"}`}
  use:visible
>
  {#if isVisible}
    <div
      class="page-container"
      style={`${centered ? "justify-content: center;" : ""}`}
      transition:fade
    >
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .full-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
  }

  .margin {
    padding-left: 64px;
    padding-top: 64px;
  }

  .page-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .alt-bg {
    background-color: var(--alt-bg);
  }
</style>
