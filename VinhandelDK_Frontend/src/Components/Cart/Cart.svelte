<script>
  import {  cartContents, itemsInCart, totalPrice } from "../../stores/cartStore.js";
  import CartItem from "../Cart/CartItem.svelte";

</script>
{#if $cartContents.length !== 0}
  <div class="container">
      {#each $cartContents as cartItem}
        <CartItem cartItem={cartItem} />
      {/each}
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
    width: 1000px;
    justify-content: center;
    margin: 0 auto;
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