import { writable, derived } from "svelte/store";

export const itemsInCart = writable(0);

export const cartContents = writable([]);

export const totalPrice = derived(cartContents, ($cartContents) =>
  $cartContents.forEach((item) => (item.price += totalPrice))
);
