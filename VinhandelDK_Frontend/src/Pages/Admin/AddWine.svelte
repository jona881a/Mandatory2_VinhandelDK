<script>

let wine = 
{ 
  prod_img_ref,
  title,
  origin,
  grape_variety,
  rating,
  ratings,
  origin_img_ref
}

function handleAddWine() {

}

</script>
<h3>Add wine to Store</h3>
<input bind:value={wine.prod_img_ref} type="text" placeholder=""/>
<input bind:value={wine.title} type="text" placeholder="title of wine"/>
<input bind:value={wine.origin} type="text" placeholder="origin of wine (region/country)"/>
<input bind:value={wine.grape_variety} type="text" placeholder="The grape (eg. Zinfandel)"/>
<input bind:value={wine.rating} type="number" />
<input bind:value={wine.ratings} type="number"/>
<input bind:value={wine.origin_img_ref} type="text"/>
<button on:click={handleAddWine}></button>
<style>

</style>