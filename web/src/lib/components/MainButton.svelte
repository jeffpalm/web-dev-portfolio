<script lang="ts">
  import { slide } from 'svelte/transition';

  interface Props {
    buttonText: string;
    onClick?: () => void;
  }

  let { buttonText, onClick }: Props = $props();
</script>

<button class="main-button" transition:slide={{ delay: 300, axis: 'y' }} onclick={onClick}>
  {buttonText}
</button>

<style>
    .main-button {
        height: 50px;
        width: 150px;
        background: none;
        font-family: var(--type-primary), sans-serif;
        font-size: 1.75rem;
        border-radius: 4px;
        color: var(--color, #fff);
        border: 1px solid var(--border-color, #fff);
        margin-top: 20px;
        margin-right: 25px;
    }

    .main-button:hover {
        cursor: pointer;
        scale: 1.1;
        transition: scale 0.2s ease-in-out;
    }

    .main-button:focus {
        outline: none;
    }
</style>
