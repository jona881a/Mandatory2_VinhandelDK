<script>
import { navigate } from "svelte-navigator";

  import { serverURL, serverEndpoints } from "../../stores/stores.js";

  //let fullname;
  let username;
  let password;
  let confirmPassword;
  //let email;

  let userCredentials;

  let displayErrorBox = 'error-display-none';
  let errorMessage = "";

  async function handleSignUp() {
    if(confirmPassword !== password) {
      displayErrorBox = 'errorBox-display';
      errorMessage = "The password you have entered does not match up";
    } else {
      userCredentials = {
        //fullname: fullname,
        username: username,
        password: password,
        //email: email
      }
      
      await fetch($serverURL + $serverEndpoints.authentication.signup, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials)})
        .then(res => res.json())
        .then(data => {
          if(data.message) {
            displayErrorBox = 'errorBox-display';
            errorMessage = data.message;
          } else {
            navigate("/login", { replace: true });
          }
          console.log(data);
        });
    }
  }

</script>

<div class="signup-form">
  <h3>Signup</h3>
  <div class={displayErrorBox}>{errorMessage}</div>
  <!-- <label for="firstname">Full name</label> -->
  <!-- <input bind:value={fullname} placeholder="eg. John Doe" class="fullname"/> -->
  <label for="username">Username</label>
  <input bind:value={username} type="text" placeholder="Username" class="username"/> 

  <label for="password">password</label>
  <input bind:value={password} type="password" placeholder="Password" class="username"/> 

  <label for="confirm-password">Confirm Password</label>
  <input bind:value={confirmPassword} type="password" class="confirm-password" />

  <!-- <label for="email">Email</label> -->
  <!-- <input bind:value={email} type="email" placeholder="Email" class="email"/>  -->
  <br/>
  <button on:click={handleSignUp}>Signup</button>
</div>

<style>
  .errorBox-display {
    display: block;
    width:fit-content;
    background-color: pink;
    color: red;
  }

  .errorBox-display-none {
    display: none;
  }
</style>