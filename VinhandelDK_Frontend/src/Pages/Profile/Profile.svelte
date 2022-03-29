<script>
  import { session, serverURL, serverEndpoints } from "../../stores/stores.js";
  import { useNavigate, useLocation } from "svelte-navigator";

  const navigate = useNavigate();
  const location = useLocation();

  let email;
  let fullname;
  
  async function handleSignOut() {
    const url = $serverURL + $serverEndpoints.authentication.signout;

    await fetch(url)
    .then(res => res.json())
    .then(data => {
      $session = data.user;
    });

    navigate("/profile",{ replace : true});
  }

  async function handleEditUser() {
    const url = $serverURL + $serverEndpoints.authentication.changeuser;


    await fetch(url, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify($session.user)})
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

    navigate("/profile", {replace : true });
  }

</script>
  <h2>Welcome {$session.user.fullname}</h2>

  <h2>Details</h2>
  <h3>Full Name</h3>
  <input type="text" bind:value={$session.user.fullname} >
  <h3>Username</h3>
  <input type="text" value={$session.user.username} readonly>
  <h3>E-mail</h3>
  <input type="email" bind:value={$session.user.email}>

  <br>
  <button on:click={handleEditUser}>Change</button>
  <button on:click={handleSignOut}>Sign out</button>
<style>

</style>