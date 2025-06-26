<script lang="ts">
  import {goto} from "$app/navigation";
  import {browser} from "$app/environment";

  const checkJwt = () => {
    let success = false
    fetch('https://test-servre-open-auth-production.up.railway.app/protect', { credentials: 'include' }).then(() => { success = true; });

    if (!success) {
      goto('/', {
        replaceState: true,
      });
    } else {
      goto('/me', {
        replaceState: true,
      });
    }
  };

  $: if (browser) {
    checkJwt();
  }
</script>

<slot></slot>