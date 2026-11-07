"""Read-only Open Collective authentication probe. Never creates expenses."""

import json
import os
import sys
import urllib.error
import urllib.request


def main():
    token = os.environ.get("OPENCOLLECTIVE_TOKEN")
    if not token:
        sys.exit("Missing GitHub Actions secret: OPENCOLLECTIVE_TOKEN")

    query = """
    query ContributionTrackerAuthenticationTest {
      me { id slug }
      account(slug: "tscircuit-contributors") { id slug }
    }
    """
    request = urllib.request.Request(
        "https://api.opencollective.com/graphql/v2",
        data=json.dumps({"query": query}).encode(),
        headers={
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "tscircuit-contribution-tracker-api-test/1.0",
            "Personal-Token": token,
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=45) as response:
            result = json.load(response)
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        if "cloudflare" in body.lower():
            sys.exit(f"HTTP {error.code}: Cloudflare blocked the API request.")
        sys.exit(f"Open Collective returned HTTP {error.code}. Response body withheld.")
    except (urllib.error.URLError, TimeoutError, ValueError):
        sys.exit("API request failed: network, timeout, or invalid JSON response.")

    if not isinstance(result, dict):
        sys.exit("API returned an unexpected response format.")
    if result.get("errors"):
        sys.exit("GraphQL returned errors. Check token validity and scopes; response withheld.")
    data = result.get("data") or {}
    if not data.get("me") or not data["me"].get("id"):
        sys.exit("Authentication failed: API did not identify a token owner.")
    payer = data.get("account") or {}
    if not payer.get("id") or payer.get("slug") != "tscircuit-contributors":
        sys.exit("Authentication succeeded, but the expected payer account was not found.")

    message = (
        "Authentication passed; payer account found. "
        "This does not verify expense-write permissions. "
        "No expenses, invitations, or payments were created."
    )
    print(message)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as output:
            output.write(message + "\n")


if __name__ == "__main__":
    main()
