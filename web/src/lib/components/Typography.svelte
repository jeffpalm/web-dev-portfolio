<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "code";
  };

  let { children, type = "p" }: Props = $props();
</script>

{#if type === "h1"}
  <h1 class="typo">
    {@render children()}
  </h1>
{:else if type === "h2"}
  <h2 class="typo">
    {@render children()}
  </h2>
{:else if type === "h3"}
  <h3 class="typo">
    {@render children()}
  </h3>
{:else if type === "h4"}
  <h4 class="typo">
    {@render children()}
  </h4>
{:else if type === "h5"}
  <h5 class="typo">
    {@render children()}
  </h5>
{:else if type === "h6"}
  <h6 class="typo">
    {@render children()}
  </h6>
{:else if type === "p"}
  <p class="typo">
    {@render children()}
  </p>
{:else if type === "code"}
  <code class="typo">
    {@render children()}
  </code>
{:else if type === "span"}
  <span class="typo">
    {@render children()}
  </span>
{/if}

<style>
  * {
    max-width: 700px;
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 600px;
    font-family: "Sometype Mono", monospace;
  }

  h4 {
      text-align: center;
  }

  p {
    font-size: var(--font-size-small);
    line-height: 1.6em;
    text-align: justify;
  }
</style>
