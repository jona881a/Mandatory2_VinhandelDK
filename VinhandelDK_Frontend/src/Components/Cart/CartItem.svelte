<script>
  import {
    Card,
    CardSubtitle,
    CardTitle,
    CardImg,
  } from 'sveltestrap';
  export let cartItem;
</script>
  <!-- svelte-ignore missing-declaration -->
  <Card class="cartitem-card">
    <div class="productimg-div">
      <CardImg src="../../Productimages/{cartItem.prod_img_ref}" class="cartitem-img"/>
    </div>
    <div class="item-body">
      <div class="product-info-div grid-1">
        <CardTitle class="item-title">{cartItem.title}</CardTitle>
      </div>
      <div class="product-info-div grid-2">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img alt="Image of origincountry's flag" src="../../FlagImages/{cartItem.origin_img_ref}" class="origin-flag-img">
        <span class="origin-description">{cartItem.origin}</span>
      </div>
      <div class="product-info-div grid-3">
        <CardSubtitle class="item-subtitle">{cartItem.grape_variety}</CardSubtitle>
      </div>
      <div class="product-info-div grid-4">
        <span class="product-price"> {cartItem.price} DKK</span>
      </div>
    </div>
  </Card>
  
  <style>
  
  :global(.cartitem-card) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    position: relative;
    background-color: #f8f9fa;
    padding: 10px 10px;
  }

  .productimg-div {
    display: flex;
    align-items: center;
    width: 360px;
  }
  
  :global(.cartitem-img) {
    margin: 0 auto;
    margin-left: 130px;
    height: 360px;
    transform: rotate(-90deg);
  }

  .item-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .grid-1,
  .grid-2 {
    align-self: end;
  }

  .grid-2,
  .grid-4 {
    margin-left: 20px;
  }
  
  :global(.card-title) {
     font-size: 1.7rem;
  }
  
  :global(.card-subtitle) {
    width: fit-content;
    display: inline-block;
    font-size: 1.3rem;
    margin: 0.5rem 0;
  }
  
  .product-info-div {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 28px;
    text-align: center;
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