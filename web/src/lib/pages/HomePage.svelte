<script lang="ts">
  import FullPage from "../components/FullPage.svelte";
  import Palmytree from "../components/Palmytree.svelte";
  import EnterButton from "../components/EnterButton.svelte";
</script>

<FullPage id="home">
  <div class="palmy-container">
    <Palmytree variant="home" />
    <EnterButton />
  </div>
</FullPage>

<style>
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
