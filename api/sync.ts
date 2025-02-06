import { Response, type Request } from "node-fetch"

export async function GET(request: Request): Promise<Response> {
  const DISCORD_CLIENT_ID =
  process?.env?.DISCORD_CLIENT_ID ||
  import.meta?.env?.DISCORD_CLIENT_ID
  const REDIRECT_URI = "https://contrib.com"
  if(!DISCORD_CLIENT_ID) {
    return new Response("", {
        status: 302,
        headers: { Location: '/' },
      })
  }
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI,
  )}&response_type=code&scope=identify%20connections`

  // Return a 302 redirect response
  return new Response("", {
    status: 302,
    headers: { Location: discordAuthUrl },
  })
}
