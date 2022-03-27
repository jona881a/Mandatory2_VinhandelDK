<script>
  import { session, serverURL, serverEndpoints } from "../../stores/stores.js";
  import { useNavigate, useLocation } from "svelte-navigator";

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSignOut() {
    const url = $serverURL + $serverEndpoints.authentication.signout;

    await fetch(url)
    .then(res => res.json())
    .then(data => {
      $session = data.user;
    });

    navigate("/login",{ replace : true});
  }

</script>
  <h3>Welcome {$session.user.username}</h3>
  <button on:click={handleSignOut}>Sign out</button>
<style>

</style>