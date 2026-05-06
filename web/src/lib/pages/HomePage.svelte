<script lang="ts">
  import Palmytree from "../components/Palmytree.svelte"
  import EnterButton from "../components/EnterButton.svelte"
</script>

<div id="home" class="page-container"></div>
<div class="background-container">
  <div class="palmy-container">
    <Palmytree variant="home" />
    <EnterButton />
  </div>
</div>

<style>
  .page-container {
    width: 100%;
    min-height: 100vh;
  }

  .background-container {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .palmy-container {
    height: auto;
    width: 100%;
    max-width: 400px;
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
