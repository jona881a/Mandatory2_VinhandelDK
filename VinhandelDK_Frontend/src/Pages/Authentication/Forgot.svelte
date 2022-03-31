<script>
  import { serverURL, serverEndpoints } from "../../stores/stores.js";

  let email;

  async function handleChangePassword() {

    const url = $serverURL + $serverEndpoints.mailer.forgotpassword;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(email)
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        console.log(message);
      }
    });
  }
</script>

<div class="container">
  <h2>Forgot Password</h2>
  <h3>Write your email below</h3>
  <input bind:value={email} type="email" placeholder="example@example.com" required>
  <br/>
  <button on:click={handleChangePassword}>Change password</button>
</div>

<style>

</style>