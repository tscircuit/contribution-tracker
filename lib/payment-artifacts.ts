// Set to false to resume payment artifact generation after CSV uploads are fixed.
export const DISABLE_PAYMENT_ARTIFACTS = true

// Applies to the payment month, including manual exports and future years.
export function arePaymentArtifactsDisabled(
  year: number,
  month: number,
): boolean {
  return (
    DISABLE_PAYMENT_ARTIFACTS && (year > 2026 || (year === 2026 && month >= 11))
  )
}
