<script>
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
    CardImg,
  } from 'sveltestrap';

  let rating = 3.5;

  function handleAddToCard() {

  }
</script>
<div class="wrapper">
<Card class="product-item-card">
  <div class="productimg-div">
    <CardImg src="../../Productimages/tQ9xfrXeRy2hOWQvcjozkw_pb_x960.png" class="productitem-img"/>
  </div>
  <CardHeader>
    <CardTitle class="card-title">1000 Stories</CardTitle>
  </CardHeader>
  <CardBody class="card-body">
    <CardSubtitle class="card-subtitle">Zinfandel</CardSubtitle>
      <div class="product-info-div rating-div">
        <span class="rating">3.5</span>
        <span class="ratings">155 Ratings</span>
      </div>
      <div class="product-info-div origin-div">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img alt="Image of origincountry's flag" src="../../FlagImages/united-states-of-america-flag-png-large.png" class="origin-flag-img">
        <span class="origin-description">California, USA</span>
      </div>
      <div class="product-info-div price-div">
        <span class="product-price"> 80DKK</span>
      </div>
  </CardBody>
  <Button on:click={handleAddToCard} class="add-item">Add to cart</Button>
</Card>
</div>

<style>
.wrapper {
  padding: 20px;
  width: 20rem;
}

:global(.product-item-card) {
  position: relative;
  background-color: #f8f9fa;
  width: 18rem;
  padding: 10px 10px;
  border-radius: 16px;
}

:global(.product-item-card:hover) {
  cursor: pointer;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
}

.productimg-div {
  display: flex;
  justify-content: center;
}

:global(.productitem-img) {
  margin: 0 auto;
  height: 360px;
}

:global(.card-title) {
   font-size: 2rem;
   margin: 0.5rem 0;
}

:global(.card-body) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
} 

:global(.card-subtitle) {
  width: fit-content;
  display: inline-block;
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.product-info-div {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
}

.rating-div {
  flex-direction: column;
  justify-self: center;
  text-align: center;
}

.rating {
  font-size: 36px;
  
}
.ratings {
  font-size: 12px;
  color: #495057;
}

.product-price {
  font-size: 28px;
  text-align: center;
}

.price-div {
  align-items: center;
  justify-content: center;
}

.origin-flag-img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
}

/*****BUTTON********/
:global(.add-item) {
  padding: 10px 15px;
  border-radius: 80px;
  border: none;
  color: #f8f9fa;
  background-color: #5F021F;
  box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.336);
}

:global(.add-item:hover) {
  cursor: pointer;
}


:global(.add-item:not(:disabled):active) {
  background-color: #5F021F;
  box-shadow: none;
}

</style>