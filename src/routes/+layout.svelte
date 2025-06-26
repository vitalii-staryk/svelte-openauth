<script lang="ts">
  import {goto} from "$app/navigation";
  import {browser} from "$app/environment";

  const checkJwt = async () => {
  let success = false;
  try {
    const resp = await fetch('https://test-servre-open-auth-production.up.railway.app/protect', { credentials: 'include' });
    if (resp.ok) success = true;
  } catch {}

  if (!success && window.location.pathname !== '/') {
    goto('/', { replaceState: true });
  }
};

  $: if (browser) {
    checkJwt();
  }
</script>

<slot></slot>