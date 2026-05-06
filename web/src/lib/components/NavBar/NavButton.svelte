<script lang="ts">
  interface Props {
    buttonText: string;
    onClick: () => void;
    isActive?: boolean;
  }

  let { buttonText, isActive = false, onClick }: Props = $props();
</script>

<button
  class={`nav-button${isActive ? " nav-button-active" : ""}`}
  onclick={onClick}
>
  {buttonText}
</button>

<style>
  @keyframes link-slide {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes invisible {
    from {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }

  .nav-button {
    background: none;
    font-family: var(--type-primary), sans-serif;
    font-size: 1rem;
    border-radius: 4px;
    color: var(--color, #fff);
    border: 1px solid var(--border-color, #ffffff50);
    padding: 5px 15px;
    margin-right: 1rem;
    animation:
      calc(0.5s + (var(--delay, 0) * 0.1s)) ease-in-out 0s invisible,
      0.2s ease-in calc(0.5s + (var(--delay, 0) * 0.1s)) link-slide;
  }

  .nav-button:hover {
    cursor: pointer;
  }

  .nav-button-active {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
</style>
