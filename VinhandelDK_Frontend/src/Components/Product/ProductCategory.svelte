<script>
  import { Collapse, Button, Card } from 'sveltestrap';
  import ProductItemCard from './ProductItemCard.svelte';

  export let collapsibleTitle;
  export let wineList;

  let isOpen = true;

  function handleCollapsibleCollapse() {
    console.log(isOpen);
    if(isOpen) {
      isOpen = false;
    } else {
      isOpen = true;
    }
  }

</script>
<div class="toggle-wrapper">
  <Button on:click={handleCollapsibleCollapse} class="toggle-button">
    <h3 class="collapsible-title">{collapsibleTitle}</h3>
  </Button>
  {#if isOpen}
    <i on:click={handleCollapsibleCollapse} class="fa-solid fa-angle-down"></i>
  {:else}
    <i on:click={handleCollapsibleCollapse} class="fa-solid fa-angle-up"></i>
  {/if}
</div>

<Collapse {isOpen} class="product-collapsible">
  {#each wineList as wine (wine.id)}
  <ProductItemCard wine={wine}/>
  {/each}
</Collapse>
<style>
  .toggle-wrapper {
    display: flex;
    align-items: center;
  }

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
  .fa-angle-down,
  .fa-angle-up {
    margin-top: 10px;
  }
  .fa-angle-down:hover,
  .fa-angle-up:hover {
    cursor: pointer;
  }

  :global(.product-collapsible) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* justify-content: center; */
  }

  /* RESONSIVENESS */
  @media screen and (max-width: 1430px) {
    :global(.product-collapsible){
        grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media screen and (max-width: 1080px) {
    :global(.product-collapsible){
        grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 720px) {
    :global(.product-collapsible){
        grid-template-columns: 1fr;
    }
  }
</style>