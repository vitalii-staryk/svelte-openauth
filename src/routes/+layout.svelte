<script lang="ts">
  import {goto} from "$app/navigation";
  import {browser} from "$app/environment";
	import { host } from "../api/auth/auth";

  const checkJwt = async () => {
  let success = false;
  try {
    const resp = await fetch(`${host}/protect`, { credentials: 'include' });
    if (resp.ok) success = true;
  } catch {}
  if (!success) {
    goto('/', { replaceState: true });
  } else {
    goto('/me', { replaceState: true });
  }
};

  $: if (browser) {
    checkJwt();
  }
</script>

<slot></slot>