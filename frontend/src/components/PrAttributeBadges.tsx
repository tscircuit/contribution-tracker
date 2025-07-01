import { useState } from "react"
import { type PrAnalysisResult } from "../types/contributor"
import { PR_ATTRIBUTES } from "lib/ai-stuff/pr-attributes"

interface PrAttributeBadgesProps {
  pr: PrAnalysisResult
}

// Mapping of attribute keys to display names
const ATTRIBUTE_DISPLAY_NAMES: Record<string, string> = {
  ...Object.fromEntries(
    Object.keys(PR_ATTRIBUTES).map((key) => [key, key.replace(/_/g, " ")]),
  ),
}

// Function to generate HSL color from string hash
function stringToHSL(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const hue = Math.abs(hash) % 360
  const saturation = 65 + (Math.abs(hash) % 20) // 65-85%
  const lightness = 45 + (Math.abs(hash) % 15) // 45-60%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export function PrAttributeBadges({ pr }: PrAttributeBadgesProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(pr)

  // Get active attributes
  const activeAttributes = Object.entries(pr)
    .filter(([key, value]) => value === true && key in ATTRIBUTE_DISPLAY_NAMES)
    .map(([key]) => key)

  if (activeAttributes.length === 0) {
    return <div className="w-[50px]" />
  }

  return (
    <div className="flex items-center">
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            // Expanded view with full badge names
            <div className="flex flex-wrap gap-1 min-w-[200px]">
              {activeAttributes.map((attr) => (
                <span
                  key={attr}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap"
                  style={{ backgroundColor: stringToHSL(attr) }}
                >
                  {ATTRIBUTE_DISPLAY_NAMES[attr]}
                </span>
              ))}
            </div>
          ) : (
            // Collapsed view with overlapping circles
            <div className="flex">
              {activeAttributes.slice(0, 3).map((attr, index) => (
                <div
                  key={attr}
                  className="w-5 h-5 rounded-full border-2 border-white flex-shrink-0"
                  style={{
                    backgroundColor: stringToHSL(attr),
                    marginLeft: index > 0 ? "-8px" : "0",
                    zIndex: activeAttributes.length - index,
                  }}
                  title={ATTRIBUTE_DISPLAY_NAMES[attr]}
                />
              ))}
              {activeAttributes.length > 3 && (
                <div
                  className="w-5 h-5 rounded-full border-2 border-white bg-gray-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0"
                  style={{ marginLeft: "-8px", zIndex: 0 }}
                  title={`+${activeAttributes.length - 3} more`}
                >
                  +{activeAttributes.length - 3}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
