import { createClient } from "@openauthjs/openauth/client";

// export const host = "http://localhost:3002";
// export const host = "https://7731-31-134-209-12.ngrok-free.app";
export const host = "https://test-servre-open-auth-production.up.railway.app";

export const redirectUri = `${host}/api/callback`;

export const authClient = createClient({
	clientID: "nextjs",
	issuer: host,
});
