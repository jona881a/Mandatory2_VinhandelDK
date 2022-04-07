import { writable } from "svelte/store";

// function createCart() {
//   const { subscribe, set, update } = writable([]);

//   return {
//     subscribe,
//     addtoCart: (item) => update((cartItems) => cartItems.push(item)),
//     removeFromCart: () => update((n) => cartItems.remove),
//   };
// }
export const cartItems = writable([]);

//export const cart = createCart();
