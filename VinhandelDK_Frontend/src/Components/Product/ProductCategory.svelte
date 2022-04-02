<script>
import { onMount } from 'svelte';

  import { Collapse, Button, Card } from 'sveltestrap';
  import ProductItemCard from './ProductItemCard.svelte';

  let isOpen = true;

  onMount(); //Her skal der laves et kald til backenden for de første 50 flasker og kategoriseres i collapsibles

  function handleCollapsibleCollapse() {
    isOpen ? isOpen = false : isOpen = true;
  }

</script>
<Button on:click={() => (isOpen = !isOpen)} class="toggle-button">
  <h3 on:click={handleCollapsibleCollapse} class="collapsible-title">Highest Rated</h3>
</Button>
<i class="fa-solid fa-angle-down"></i>
<Collapse {isOpen}>
  <ProductItemCard/>
</Collapse>
<style>
  :global(.toggle-button) {
    background: none;
    border: none;
  }
  :global(.toggle-button:hover) {
    cursor: pointer;
  }

  .collapsible-title {
    color: #495057;
    margin-bottom: 0;
  }
  .fa-angle-down:hover {
    cursor: pointer;
  }
</style>