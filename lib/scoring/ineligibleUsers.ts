import fs from "node:fs"
import path from "node:path"

export interface IneligibleUser {
  github_username: string
  reason: string
  date_added: string
  added_by: string
}

const INELIGIBLE_FILE_PATH = path.join(process.cwd(), "ineligible-for-sponsorship.csv")


function parseCSVLine(line: string): IneligibleUser | null {
  const parts: string[] = []
  let current = ''
  let inQuotes = false
  let i = 0

  while (i < line.length) {
    const char = line[i]
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i += 2
      } else {
        inQuotes = !inQuotes
        i++
      }
    } else if (char === ',' && !inQuotes) {
      parts.push(current.trim())
      current = ''
      i++
    } else {
      current += char
      i++
    }
  }
  
  parts.push(current.trim())
  
  if (parts.length !== 4) {
    console.warn(`Invalid CSV line format: ${line}`)
    return null
  }

  const [github_username, reason, date_added, added_by] = parts
  
  if (!github_username || !reason || !date_added || !added_by) {
    console.warn(`Missing required fields in CSV line: ${line}`)
    return null
  }

  return {
    github_username,
    reason,
    date_added,
    added_by
  }
}


function toCSVLine(user: IneligibleUser): string {
  const escape = (value: string) => {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`
    }
    return value
  }

  return [
    escape(user.github_username),
    escape(user.reason),
    escape(user.date_added),
    escape(user.added_by)
  ].join(',')
}

export function loadIneligibleUsers(): IneligibleUser[] {
  try {
    if (!fs.existsSync(INELIGIBLE_FILE_PATH)) {
      console.log("No ineligible users file found, treating all users as eligible")
      return []
    }

    const content = fs.readFileSync(INELIGIBLE_FILE_PATH, 'utf-8')
    const lines = content.trim().split('\n')
    
    if (lines.length <= 1) {
      return []
    }

    const users: IneligibleUser[] = []
    for (let i = 1; i < lines.length; i++) {
      const user = parseCSVLine(lines[i])
      if (user) {
        users.push(user)
      }
    }

    return users
  } catch (error) {
    console.error("Error loading ineligible users:", error)
    return []
  }
}

function saveIneligibleUsers(users: IneligibleUser[]): void {
  try {
    const header = "github_username,reason,date_added,added_by"
    const lines = [header, ...users.map(toCSVLine)]
    const content = lines.join('\n') + '\n'
    
    fs.writeFileSync(INELIGIBLE_FILE_PATH, content, 'utf-8')
  } catch (error) {
    console.error("Error saving ineligible users:", error)
    throw error
  }
}


export function isUserIneligible(username: string): boolean {
  const ineligibleUsers = loadIneligibleUsers()
  return ineligibleUsers.some(user => user.github_username === username)
}

export function getIneligibleUser(username: string): IneligibleUser | null {
  const ineligibleUsers = loadIneligibleUsers()
  return ineligibleUsers.find(user => user.github_username === username) || null
}

export function getIneligibleUsernames(): Set<string> {
  const ineligibleUsers = loadIneligibleUsers()
  return new Set(ineligibleUsers.map(user => user.github_username))
}

export function addIneligibleUser(
  username: string, 
  reason: string, 
  addedBy: string = "system"
): void {
  const users = loadIneligibleUsers()
  
  if (users.some(user => user.github_username === username)) {
    throw new Error(`User ${username} is already in the ineligible list`)
  }

  const newUser: IneligibleUser = {
    github_username: username,
    reason,
    date_added: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    added_by: addedBy
  }

  users.push(newUser)
  saveIneligibleUsers(users)
  
  console.log(`Added ${username} to ineligible list: ${reason}`)
}

export function removeIneligibleUser(username: string): boolean {
  const users = loadIneligibleUsers()
  const initialLength = users.length
  
  const filteredUsers = users.filter(user => user.github_username !== username)
  
  if (filteredUsers.length === initialLength) {
    console.log(`User ${username} was not found in the ineligible list`)
    return false
  }

  saveIneligibleUsers(filteredUsers)
  console.log(`Removed ${username} from ineligible list`)
  return true
}

export function listIneligibleUsers(): IneligibleUser[] {
  return loadIneligibleUsers()
}
