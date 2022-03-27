import { writable } from "svelte/store";

export const serverURL = writable("http://localhost:3000");

export const user = writable(null);

export const session = writable(null);

export const serverEndpoints = writable({
  authentication: {
    login: "/auth/login",
    signup: "/auth/signup",
    signout: "/auth/signout",
    changepassword: "/auth/changepassword",
  },
});
