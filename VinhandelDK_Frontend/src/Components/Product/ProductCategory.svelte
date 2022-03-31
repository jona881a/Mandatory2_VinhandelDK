<script>
  import { Collapse, Button, Card } from 'sveltestrap';
  import ProductItemCard from './ProductItemCard.svelte';

  let isOpen = true;
</script>
<Button color="primary" on:click={() => (isOpen = !isOpen)} class="mb-3">
  Toggle
</Button>
<Collapse {isOpen}>
  <ProductItemCard/>
</Collapse>
<style>

</style>