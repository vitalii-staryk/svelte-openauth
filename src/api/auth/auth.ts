import {createClient} from "@openauthjs/openauth/client";

export const redirectUri = 'https://test-servre-open-auth-production.up.railway.app/api/callback';

export const authClient = createClient({
  clientID: "nextjs",
  issuer: "https://test-servre-open-auth-production.up.railway.app",
})

