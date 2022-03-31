<script>
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    CardImg,
  } from 'sveltestrap';

  let rating = 3.5;

  function handleAddToCard() {

  }
</script>
<Card class="product-item-card">
  <div class="productimg-div">
    <!--Lav et icon med flag som repræsentere origin-->
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
      <div class="product-info-div price-div">
        <span>Price: </span><span> 80DKK</span>
      </div>
      <div class="product-info-div origin-div">
        <span>Origin</span><span></span>
      </div>
  </CardBody>
  <Button on:click={handleAddToCard} class="add-item">Add to cart</Button>
</Card>

<style>
:global(.product-item-card) {
  position: relative;
  background-color: #f8f9fa;
  width: 18rem;
  padding-left: 10px;
  border-radius: 16px;
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

.price-div {
  
}

.origin-div {

}

:global(.item-price){
  display: flex;
  justify-content: space-between;
}

/*****BUTTON********/
:global(.add-item) {
  padding: 10px 15px;
  border-radius: 80px;
  border: none;
  color: #f8f9fa;
  background-color: #5F021F;
}

:global(.add-item:hover) {
  cursor: pointer;
  box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.336);
  background-color: #851135;
}

:global(.add-item:active) {
  background-color: #5F021F;
}

</style>