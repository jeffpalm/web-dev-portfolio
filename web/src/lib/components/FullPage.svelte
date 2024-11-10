<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    id?: string;
    children: Snippet;
    altBg?: boolean;
  }

  let { id, altBg = false, children }: Props = $props();
</script>

<div {id} class={`full-page${altBg ? " alt-bg" : ""}`}>
  {@render children()}
</div>

<style>
  .full-page {
    width: 100%;
    height: 100vh;
    padding-left: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .alt-bg {
    background-color: var(--alt-bg);
  }
</style>
