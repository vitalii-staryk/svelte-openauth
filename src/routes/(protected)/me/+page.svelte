<script lang="ts">
  import {onMount} from "svelte";

  let res = '';
  let manualRes = '';

  onMount(() => {
    fetch('https://test-servre-open-auth-production.up.railway.app/protect', { credentials: 'include' })
      .then((resp) => resp.json().then(json => {
        res = JSON.stringify(json);
      }))
  })

  async function fetchManual() {
    const resp = await fetch('https://test-servre-open-auth-production.up.railway.app/protect', { credentials: 'include' });
    manualRes = JSON.stringify(await resp.json());
  }
</script>

<div>
  <h1>Athorized</h1>
  <p>onMount: {res}</p>
  <button on:click={fetchManual}>Fetch /protect вручну</button>
  <p>Manual fetch: {manualRes}</p>
</div>