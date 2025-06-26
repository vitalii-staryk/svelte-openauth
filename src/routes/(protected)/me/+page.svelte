<script lang="ts">
  import {onMount} from "svelte";

  let res: string = '';

  onMount(() => {
    fetch('https://test-servre-open-auth-production.up.railway.app/protect').then((resp) => resp.json().then(json => res = json) )
  })
</script>

<div>
  <h1>Athorized</h1>
  <p>{res}</p>
</div>