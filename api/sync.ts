export async function GET(request: Request): Promise<Response> {
    const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;

    // Construct the redirect URI from the request's origin
    const REDIRECT_URI = new URL('/api/callback', request.url).toString();

    // If no Discord client ID is available, redirect with an error
    if (!DISCORD_CLIENT_ID) {
        return new Response(null, {
            status: 302,
            headers: { Location: "/?no-discord-token" },
        });
    }

    // Construct Discord OAuth2 URL
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
    )}&response_type=code&scope=identify%20connections`;

    // Redirect the user to Discord's authorization URL
    return new Response(null, {
        status: 302,
        headers: { Location: discordAuthUrl },
    });
}
