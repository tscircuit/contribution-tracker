import fs from "node:fs"
import path from "node:path"

export interface HardwareReimbursement {
  username: string
  amount: number
  description?: string
  date: Date
}

export function readHardwareReimbursements(
  filePath = path.join(process.cwd(), "hardware-reimbursements.toml"),
): HardwareReimbursement[] {
  if (!fs.existsSync(filePath)) return []

  const parsed = Bun.TOML.parse(fs.readFileSync(filePath, "utf-8")) as {
    reimbursements?: Array<
      Partial<{
        username: string
        amount: number
        amount_usd: number
        description: string
        item: string
        date: string
      }>
    >
  }

  if (!Array.isArray(parsed.reimbursements)) return []

  return parsed.reimbursements.flatMap((entry) => {
    const username = typeof entry.username === "string" ? entry.username : ""
    const amount =
      typeof entry.amount === "number"
        ? entry.amount
        : typeof entry.amount_usd === "number"
          ? entry.amount_usd
          : Number.NaN
    if (!username || !Number.isFinite(amount)) return []

    const description =
      typeof entry.description === "string"
        ? entry.description
        : typeof entry.item === "string"
          ? entry.item
          : undefined

    const parsedDate =
      typeof entry.date === "string" ? new Date(entry.date) : undefined
    if (!parsedDate || Number.isNaN(parsedDate.getTime())) return []

    return [
      {
        username,
        amount,
        description,
        date: parsedDate,
      } satisfies HardwareReimbursement,
    ]
  })
}

export function filterHardwareReimbursementsForMonth(
  reimbursements: HardwareReimbursement[],
  year: number,
  month: number,
): HardwareReimbursement[] {
  return reimbursements.filter(
    (reimbursement) =>
      reimbursement.date.getUTCFullYear() === year &&
      reimbursement.date.getUTCMonth() + 1 === month,
  )
}

export function applyHardwareReimbursements(
  sponsorships: { username: string; amount: number; remarks: string }[],
  reimbursements: HardwareReimbursement[],
): { username: string; amount: number; remarks: string }[] {
  if (reimbursements.length === 0) return sponsorships

  const sponsorshipMap = new Map(
    sponsorships.map((sponsorship) => [sponsorship.username, sponsorship]),
  )

  reimbursements.forEach((reimbursement) => {
    const hardwareAmount = Math.round(Number(reimbursement.amount) * 100) / 100
    const hardwareRemark = reimbursement.description
      ? `Hardware reimbursement (${reimbursement.description}): $${hardwareAmount.toFixed(2)}`
      : `Hardware reimbursement: $${hardwareAmount.toFixed(2)}`

    const existing = sponsorshipMap.get(reimbursement.username)

    if (existing) {
      const updatedAmount =
        Math.round((existing.amount + hardwareAmount) * 100) / 100
      sponsorshipMap.set(reimbursement.username, {
        ...existing,
        amount: updatedAmount,
        remarks: `${existing.remarks} | ${hardwareRemark}`,
      })
    } else {
      sponsorshipMap.set(reimbursement.username, {
        username: reimbursement.username,
        amount: hardwareAmount,
        remarks: hardwareRemark,
      })
    }
  })

  return Array.from(sponsorshipMap.values())
}
