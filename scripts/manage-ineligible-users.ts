#!/usr/bin/env bun

import {
  addIneligibleUser,
  removeIneligibleUser,
  listIneligibleUsers,
  isUserIneligible,
  getIneligibleUser,
} from "../lib/scoring/ineligibleUsers"

function showHelp() {
  console.log(`
Usage: bun run manage-ineligible-users.ts <command> [arguments]

Commands:
  add <username> <reason> [added-by]    Add a user to the ineligible list
  remove <username>                     Remove a user from the ineligible list
  list                                  List all ineligible users
  check <username>                      Check if a user is ineligible
  help                                  Show this help message

Examples:
  bun run manage-ineligible-users.ts add user123 "Claimed bounty early" maintainer1
  bun run manage-ineligible-users.ts remove user123
  bun run manage-ineligible-users.ts list
  bun run manage-ineligible-users.ts check user123
`)
}

function formatTable(users: ReturnType<typeof listIneligibleUsers>) {
  if (users.length === 0) {
    console.log("No ineligible users found.")
    return
  }

  console.log("\nIneligible Users:")
  console.log("━".repeat(80))
  console.log(
    `${"Username".padEnd(20)} ${"Reason".padEnd(30)} ${"Date Added".padEnd(12)} ${"Added By".padEnd(15)}`,
  )
  console.log("━".repeat(80))

  users.forEach((user) => {
    const username = user.github_username.padEnd(20)
    const reason = (
      user.reason.length > 28
        ? user.reason.substring(0, 25) + "..."
        : user.reason
    ).padEnd(30)
    const dateAdded = user.date_added.padEnd(12)
    const addedBy = user.added_by.padEnd(15)

    console.log(`${username} ${reason} ${dateAdded} ${addedBy}`)
  })
  console.log("━".repeat(80))
  console.log(`Total: ${users.length} ineligible users`)
}

function main() {
  const args = process.argv.slice(2)

  if (
    args.length === 0 ||
    args[0] === "help" ||
    args[0] === "--help" ||
    args[0] === "-h"
  ) {
    showHelp()
    return
  }

  const command = args[0].toLowerCase()

  try {
    switch (command) {
      case "add": {
        if (args.length < 3) {
          console.error("Error: 'add' command requires username and reason")
          console.log(
            "Usage: bun run manage-ineligible-users.ts add <username> <reason> [added-by]",
          )
          process.exit(1)
        }

        const username = args[1]
        const reason = args[2]
        const addedBy = args[3] || "system"

        // Validate username format (basic GitHub username validation)
        if (
          !/^[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]$|^[a-zA-Z0-9]$/.test(
            username,
          )
        ) {
          console.error(`Error: '${username}' is not a valid GitHub username`)
          process.exit(1)
        }

        if (isUserIneligible(username)) {
          const existingUser = getIneligibleUser(username)
          console.error(`Error: User '${username}' is already ineligible`)
          console.log(`Current reason: ${existingUser?.reason}`)
          console.log(
            `Added on: ${existingUser?.date_added} by ${existingUser?.added_by}`,
          )
          process.exit(1)
        }

        addIneligibleUser(username, reason, addedBy)
        console.log(`Successfully added '${username}' to the ineligible list`)
        break
      }

      case "remove": {
        if (args.length < 2) {
          console.error("Error: 'remove' command requires username")
          console.log(
            "Usage: bun run manage-ineligible-users.ts remove <username>",
          )
          process.exit(1)
        }

        const username = args[1]
        const removed = removeIneligibleUser(username)

        if (removed) {
          console.log(
            `Successfully removed '${username}' from the ineligible list`,
          )
        } else {
          console.log(`User '${username}' was not found in the ineligible list`)
        }
        break
      }

      case "list": {
        const users = listIneligibleUsers()
        formatTable(users)
        break
      }

      case "check": {
        if (args.length < 2) {
          console.error("Error: 'check' command requires username")
          console.log(
            "Usage: bun run manage-ineligible-users.ts check <username>",
          )
          process.exit(1)
        }

        const username = args[1]
        const user = getIneligibleUser(username)

        if (user) {
          console.log(`User '${username}' is INELIGIBLE for sponsorship`)
          console.log(`   Reason: ${user.reason}`)
          console.log(`   Added on: ${user.date_added} by ${user.added_by}`)
        } else {
          console.log(`User '${username}' is eligible for sponsorship`)
        }
        break
      }

      default:
        console.error(`Error: Unknown command '${command}'`)
        showHelp()
        process.exit(1)
    }
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : String(error)}`,
    )
    process.exit(1)
  }
}

main()
