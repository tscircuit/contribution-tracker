#!/usr/bin/env bun
import { 
  loadIneligibleList, 
  addIneligibleUser, 
  removeIneligibleUser, 
  getIneligibleUsersDisplay 
} from "../lib/ineligible-sponsorships.js"

function showHelp() {
  console.log(`
Ineligible Sponsorship Management Tool

Usage:
  bun scripts/manage-ineligible.ts <command> [args]

Commands:
  list                          - Show all ineligible users
  add <username> <reason>       - Add a user to the ineligible list
  remove <username>             - Remove a user from the ineligible list
  help                          - Show this help message

Examples:
  bun scripts/manage-ineligible.ts list
  bun scripts/manage-ineligible.ts add "baduser123" "Claimed bounty early without completing requirements"
  bun scripts/manage-ineligible.ts remove "baduser123"
`)
}

function main() {
  const args = process.argv.slice(2)
  
  if (args.length === 0 || args[0] === 'help') {
    showHelp()
    return
  }

  const command = args[0]

  switch (command) {
    case 'list':
      console.log('Ineligible Users for Sponsorship:')
      console.log('=================================')
      const display = getIneligibleUsersDisplay()
      console.log(display)
      break

    case 'add':
      if (args.length < 3) {
        console.error('Error: Please provide both username and reason')
        console.error('Usage: bun scripts/manage-ineligible.ts add <username> <reason>')
        process.exit(1)
      }
      const username = args[1]
      const reason = args.slice(2).join(' ') // Join all remaining args as reason
      
      try {
        addIneligibleUser(username, reason)
        console.log(`✅ Added ${username} to ineligible list: ${reason}`)
      } catch (error) {
        console.error(`❌ Error adding user: ${error}`)
        process.exit(1)
      }
      break

    case 'remove':
      if (args.length < 2) {
        console.error('Error: Please provide username to remove')
        console.error('Usage: bun scripts/manage-ineligible.ts remove <username>')
        process.exit(1)
      }
      const usernameToRemove = args[1]
      
      try {
        const removed = removeIneligibleUser(usernameToRemove)
        if (removed) {
          console.log(`✅ Removed ${usernameToRemove} from ineligible list`)
        } else {
          console.log(`ℹ️  User ${usernameToRemove} was not found in the ineligible list`)
        }
      } catch (error) {
        console.error(`❌ Error removing user: ${error}`)
        process.exit(1)
      }
      break

    default:
      console.error(`Unknown command: ${command}`)
      showHelp()
      process.exit(1)
  }
}

main()