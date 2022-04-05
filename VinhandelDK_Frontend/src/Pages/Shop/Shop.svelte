<script>
  import { onMount } from "svelte";
  import ProductCategory from "../../Components/Product/ProductCategory.svelte";
  import { serverURL } from "../../stores/stores.js";

  let wineList = [];

  onMount( async () => {
    const res = await fetch($serverURL + "/shop");
    const { data } = await res.json();
    wineList = data;
  });

</script>
  <ProductCategory collapsibleTitle="Highest Rated" wineList={wineList}/>
<style></style>