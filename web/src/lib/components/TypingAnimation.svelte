<script lang="ts">
  import Typed from "typed.js";
  import type { TypedOptions } from "typed.js";

  type Props = {
    strings: string[];
    options?: TypedOptions;
  };

  let {
    strings,
    options = {
      strings,
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
    },
  }: Props = $props();

  function typeaction(node: HTMLSpanElement) {
    $effect(() => {
      const typed = new Typed(node, options);
      return () => typed.destroy();
    });
  }
</script>

<span style="white-space: pre;" use:typeaction></span>

<style>
  span {
    color: var(--color);
  }
</style>
