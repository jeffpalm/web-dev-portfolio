<script lang="ts">
  import MainButton from "./MainButton.svelte";
  import { onMount } from "svelte";

  let hueOne = 0;
  let hueTwo = 0;
  const speedOne = 2;
  const speedTwo = 2;

  onMount(() => {
    const interval = setInterval(() => {
      hueOne =
        hueOne + speedOne > 360 ? hueOne + speedOne - 360 : hueOne + speedOne;
      hueTwo =
        hueTwo - speedTwo < 0 ? 360 + (hueTwo - speedTwo) : hueTwo - speedTwo;
    }, 34);
    return () => clearInterval(interval);
  });

  function handleClick() {
    const aboutPage = document.getElementById("about");

    aboutPage?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
</script>

<MainButton
  onClick={handleClick}
  buttonText="Enter"
  --color={`hsl(${hueOne}, 100%, 50%)`}
  --border-color={`hsl(${hueTwo}, 100%, 50%)`}
/>
