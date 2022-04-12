<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { serverURL, serverEndpoints, session } from "../../stores/stores.js";
  
  const navigate = useNavigate();
  
  let displayErrorBox = 'error-display-none';
  let errorMessage = "";
  
  let username;
  let password;
  
  async function handleSubmit() {
    const url = $serverURL + $serverEndpoints.authentication.login;
    const userCredentials = {username: username, password: password};
    
    await fetch(url, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials)})
      .then(response => response.json())
      .then(data => { 
        if(data.message) {
          errorMessage = data.message;
          displayErrorBox = 'errorBox-display';
        } else {
          $session = data.session;
          navigate("/profile", { replace: true });
        }
      })
      .catch(error => console.log(error));
  }
  
  </script>
  <div>
    <h3>Login</h3>
    <div class={displayErrorBox}>{errorMessage}</div>
    <input class="login" bind:value={username} name="username" type="text" placeholder="Username">
    <br/>
    <input class="password" bind:value={password} name="password" type="password" placeholder="Password"> 
    <br/>
    <a href="/forgot">Forgot Password?</a>
    <br/>
    <button on:click={handleSubmit}>Login</button>
    <a href="/signup">Don't have an Account? Click here</a>
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