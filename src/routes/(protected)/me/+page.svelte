<script lang="ts">
  import {onMount} from "svelte";
	import { host } from "../../../api/auth/auth";

  let res = '';
  let manualRes = '';

  onMount(() => {
    fetch(`${host}/protect`, { credentials: 'include' })
      .then((resp) => resp.json().then(json => {
        res = JSON.stringify(json);
      }))
  })

  async function fetchManual() {
    const resp = await fetch(`${host}/protect`, { credentials: 'include' });
    
    manualRes = (await resp.json()).message;

  }
</script>

<div>
  <h1>Athorized</h1>
  <p>onMount: {res}</p>
  <button on:click={fetchManual}>Fetch /protect вручну</button>
  <p>Manual fetch: {manualRes}</p>
</div>