<script>
  import toastr from "toastr";
  import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
    CardImg,
  } from 'sveltestrap';
  import { cart, cartItems} from "../../stores/cartStore.js";

  export let wine;

  toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": true,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

  function handleAddToCard() {
    toastr.success('Item added to cart');
  }

</script>
<div class="wrapper">
<Card class="product-item-card">
  <div class="productimg-div">
    <CardImg src="../../Productimages/{wine.prodImgRef}" class="productitem-img"/>
  </div>
  <CardHeader>
    <CardTitle class="card-title">{wine.title}</CardTitle>
  </CardHeader>
  <CardBody class="card-body">
    <CardSubtitle class="card-subtitle">{wine.grapeVariety}</CardSubtitle>
      <div class="product-info-div rating-div">
        <span class="rating">{wine.rating}</span>
        <span class="ratings">{wine.ratings}</span>
      </div>
      <div class="product-info-div origin-div">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img alt="Image of origincountry's flag" src="../../FlagImages/{wine.originImgRef}" class="origin-flag-img">
        <span class="origin-description">{wine.origin}</span>
      </div>
      <div class="product-info-div price-div">
        <span class="product-price"> {wine.price} DKK</span>
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
   font-size: 1.7rem;
   margin: 0.5rem 0;
}

:global(.card-body) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

:global(.card-subtitle) {
  width: fit-content;
  display: inline-block;
  font-size: 1.3rem;
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