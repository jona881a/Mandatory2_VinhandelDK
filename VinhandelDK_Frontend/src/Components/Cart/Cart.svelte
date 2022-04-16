<script>
  import {  cartContents, itemsInCart, totalPrice } from "../../stores/cartStore.js";
  import { serverURL } from "../../stores/stores.js";
  import CartItem from "../Cart/CartItem.svelte";

async function handleBuyItemsInCart() {
  await fetch($serverURL + "/mail/purchase-confirmation", {
    method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify()}
  )
}

function handleEmptyCart() {
  $cartContents = [];
  $itemsInCart = 0;
}

</script>
{#if $cartContents.length !== 0}
  <div class="container">
      {#each $cartContents as cartItem}
        <CartItem cartItem={cartItem} />
      {/each}
      <div class="cart-details">
        <div class="button-wrapper">
          <button on:click={handleBuyItemsInCart} class="buy-btn">Buy <i class="fa-solid fa-cart-shopping"></i></button>
          <button on:click={handleEmptyCart} class="remove-all-btn">Empty <i class="fa-solid fa-x"></i></button>
        </div>
        <div class="details-wrapper">
          <p>Total: 200 DKK</p>
        </div>
      </div>
  </div>
{:else}
<div class="no-items-div">
  <h1>You have no items in your shopping cart... </h1>
  <a href="/shop">Click here to browse wonderful wine</a>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img class="stockphoto" src="../../MiscImages/wine_bottle.jpg" alt="wine-photo">
</div>

{/if}
<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 1000px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 60px;
    overflow: hidden;
  }

  .cart-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid #adb5bd;
    padding-left: 56px;
    background-color:  #f8f9fa;
  }

  .button-wrapper {
    align-self: center;
  }

  .details-wrapper {
    margin-right: 30px;
    font-size: 36px;
    font-weight: 300;
  }

  .details-wrapper p {
    display: block;
  }

  .buy-btn {
    padding: 10px 15px;
    border-radius: 80px;
    border: none;
    color: #f8f9fa;
    background-color: #5F021F;
    box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.336);
  }

  .remove-all-btn {
    padding: 10px 15px;
    border-radius: 80px;
    border: none;
  }

  .buy-btn:hover,
  .remove-all-btn:hover {
    cursor: pointer;
  }

  .buy-btn:active {
    background-color: #5F021F;
    box-shadow: none;
  }

  .no-items-div {
    margin-top: 50px;
    text-align: center;
  }

  .no-items-div h1{
    font-size: 2em;
    color: #343a40
  }

  .no-items-div a{
    display: block;
    color: #868e96;
    margin-bottom: 30px;
  }

  .stockphoto {
    width: 100%;
    height: 800px;
  }

</style>