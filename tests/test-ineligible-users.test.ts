import { test, expect, beforeEach, afterEach } from "bun:test"
import fs from "node:fs"
import path from "node:path"
import {
  addIneligibleUser,
  removeIneligibleUser,
  listIneligibleUsers,
  isUserIneligible,
  getIneligibleUser,
  getIneligibleUsernames,
} from "../lib/scoring/ineligibleUsers"

const TEST_FILE_PATH = path.join(
  process.cwd(),
  "ineligible-for-sponsorship-test.csv",
)
const ORIGINAL_FILE_PATH = path.join(
  process.cwd(),
  "ineligible-for-sponsorship.csv",
)

beforeEach(() => {
  if (fs.existsSync(ORIGINAL_FILE_PATH)) {
    fs.copyFileSync(ORIGINAL_FILE_PATH, `${ORIGINAL_FILE_PATH}.backup`)
  }

  fs.writeFileSync(
    TEST_FILE_PATH,
    "github_username,reason,date_added,added_by\n",
  )

  if (fs.existsSync(ORIGINAL_FILE_PATH)) {
    fs.unlinkSync(ORIGINAL_FILE_PATH)
  }
  fs.copyFileSync(TEST_FILE_PATH, ORIGINAL_FILE_PATH)
})

afterEach(() => {
  if (fs.existsSync(TEST_FILE_PATH)) {
    fs.unlinkSync(TEST_FILE_PATH)
  }

  if (fs.existsSync(`${ORIGINAL_FILE_PATH}.backup`)) {
    fs.copyFileSync(`${ORIGINAL_FILE_PATH}.backup`, ORIGINAL_FILE_PATH)
    fs.unlinkSync(`${ORIGINAL_FILE_PATH}.backup`)
  } else {
    fs.writeFileSync(
      ORIGINAL_FILE_PATH,
      "github_username,reason,date_added,added_by\n",
    )
  }
})

test("should start with empty ineligible list", () => {
  const users = listIneligibleUsers()
  expect(users).toEqual([])
})

test("should add user to ineligible list", () => {
  addIneligibleUser("testuser", "Test reason", "maintainer")

  const users = listIneligibleUsers()
  expect(users).toHaveLength(1)
  expect(users[0].github_username).toBe("testuser")
  expect(users[0].reason).toBe("Test reason")
  expect(users[0].added_by).toBe("maintainer")
  expect(users[0].date_added).toMatch(/^\d{4}-\d{2}-\d{2}$/)
})

test("should check if user is ineligible", () => {
  expect(isUserIneligible("testuser")).toBe(false)

  addIneligibleUser("testuser", "Test reason", "maintainer")

  expect(isUserIneligible("testuser")).toBe(true)
  expect(isUserIneligible("otheruser")).toBe(false)
})

test("should get ineligible user details", () => {
  addIneligibleUser("testuser", "Test reason", "maintainer")

  const user = getIneligibleUser("testuser")
  expect(user).not.toBeNull()
  expect(user?.github_username).toBe("testuser")
  expect(user?.reason).toBe("Test reason")
  expect(user?.added_by).toBe("maintainer")

  const nonExistentUser = getIneligibleUser("nonexistent")
  expect(nonExistentUser).toBeNull()
})

test("should get ineligible usernames as Set", () => {
  addIneligibleUser("user1", "Reason 1", "maintainer")
  addIneligibleUser("user2", "Reason 2", "maintainer")

  const usernames = getIneligibleUsernames()
  expect(usernames).toBeInstanceOf(Set)
  expect(usernames.has("user1")).toBe(true)
  expect(usernames.has("user2")).toBe(true)
  expect(usernames.has("user3")).toBe(false)
  expect(usernames.size).toBe(2)
})

test("should remove user from ineligible list", () => {
  addIneligibleUser("testuser", "Test reason", "maintainer")
  expect(isUserIneligible("testuser")).toBe(true)

  const removed = removeIneligibleUser("testuser")
  expect(removed).toBe(true)
  expect(isUserIneligible("testuser")).toBe(false)

  const removedAgain = removeIneligibleUser("testuser")
  expect(removedAgain).toBe(false)
})

test("should throw error when adding duplicate user", () => {
  addIneligibleUser("testuser", "Test reason", "maintainer")

  expect(() => {
    addIneligibleUser("testuser", "Another reason", "maintainer")
  }).toThrow("User testuser is already in the ineligible list")
})

test("should handle CSV with commas and quotes in data", () => {
  const reasonWithComma = "Claimed bounty early, violated terms"
  const reasonWithQuotes = 'Said "I deserve this" without completing work'

  addIneligibleUser("user1", reasonWithComma, "maintainer")
  addIneligibleUser("user2", reasonWithQuotes, "maintainer")

  const users = listIneligibleUsers()
  expect(users).toHaveLength(2)
  expect(users[0].reason).toBe(reasonWithComma)
  expect(users[1].reason).toBe(reasonWithQuotes)
})

test("should handle multiple users in list", () => {
  addIneligibleUser("user1", "Reason 1", "maintainer1")
  addIneligibleUser("user2", "Reason 2", "maintainer2")
  addIneligibleUser("user3", "Reason 3", "maintainer1")

  const users = listIneligibleUsers()
  expect(users).toHaveLength(3)

  const usernames = users.map((u) => u.github_username)
  expect(usernames).toContain("user1")
  expect(usernames).toContain("user2")
  expect(usernames).toContain("user3")

  removeIneligibleUser("user2")

  const updatedUsers = listIneligibleUsers()
  expect(updatedUsers).toHaveLength(2)

  const updatedUsernames = updatedUsers.map((u) => u.github_username)
  expect(updatedUsernames).toContain("user1")
  expect(updatedUsernames).toContain("user3")
  expect(updatedUsernames).not.toContain("user2")
})

test("should handle missing file gracefully", () => {
  fs.unlinkSync(ORIGINAL_FILE_PATH)

  const users = listIneligibleUsers()
  expect(users).toEqual([])

  expect(isUserIneligible("testuser")).toBe(false)
  expect(getIneligibleUser("testuser")).toBeNull()

  const usernames = getIneligibleUsernames()
  expect(usernames.size).toBe(0)
})

test("should handle malformed CSV lines", () => {
  const malformedContent = `github_username,reason,date_added,added_by
validuser,Valid reason,2025-09-24,maintainer
invalidline
user2,reason2,2025-09-24,maintainer2,extrafield
user3,reason3,2025-09-24
validuser2,Valid reason 2,2025-09-24,maintainer2
`
  fs.writeFileSync(ORIGINAL_FILE_PATH, malformedContent)

  const users = listIneligibleUsers()
  expect(users).toHaveLength(2)
  expect(users[0].github_username).toBe("validuser")
  expect(users[1].github_username).toBe("validuser2")
})

test("should use default 'system' added_by when not specified", () => {
  addIneligibleUser("testuser", "Test reason")

  const user = getIneligibleUser("testuser")
  expect(user?.added_by).toBe("system")
})
