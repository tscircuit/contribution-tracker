import { useMemo, useState } from "react"
import { useContributorsData } from "../hooks/useContributorsData"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts"
import { useDarkMode } from "../hooks/useDarkMode.tsx"
import {
  BG_CARD,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/tailwind-utils"

const DROPDOWN_MENU_ITEMS = [
  { key: "prsMerged", label: "Pull Requests Merged" },
  { key: "score", label: "Contributor Score" },
  { key: "prsOpened", label: "Pull Requests Opened" },
  { key: "issuesCreated", label: "Issues Created" },
  { key: "approvalsGiven", label: "Approvals Given" },
  { key: "approvalsReceived", label: "Approvals Received" },
  { key: "rejectionsGiven", label: "Rejections Given" },
  { key: "rejectionsReceived", label: "Rejections Received" },
  { key: "reviewsReceived", label: "Reviews Received" },
  { key: "bountiedIssuesCount", label: "Bountied Issues (Count)" },
  { key: "bountiedIssuesTotal", label: "Bountied Issues (Total)" },
]

const SCORE_LABELS = {
  4: "⭐",
  11: "⭐⭐",
  31: "⭐⭐⭐",
  51: "👑",
  76: "👑👑",
  101: "👑👑👑",
}

export default function ContributorGraph({ username }: { username: string }) {
  const { last8WeeksData } = useContributorsData()
  const { isDarkMode } = useDarkMode()

  // State for the selected metric
  const [selectedMetric, setSelectedMetric] = useState("prsMerged")

  // Fetch graph data based on the username and includeSkeletonDataSet toggle.
  const graphData = useMemo(
    () => last8WeeksData(username),
    [username, last8WeeksData],
  )

  return (
    <div className={`p-4 ${BG_CARD} shadow-sm rounded-lg mb-2`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <h2 className={`text-lg font-semibold ${TEXT_PRIMARY}`}>
          Contributor Activity
        </h2>
        <div className="flex items-center space-x-4">
          <select
            className={`px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 ${TEXT_PRIMARY}`}
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
          >
            {DROPDOWN_MENU_ITEMS.map((metric) => (
              <option key={metric.key} value={metric.key}>
                {metric.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            {selectedMetric === "score" &&
              Object.entries(SCORE_LABELS).map(([score, label]) => (
                <ReferenceLine
                  key={score}
                  y={Number(score)}
                  stroke="#FFEA00"
                  strokeOpacity={0.8}
                  strokeDasharray="9 12"
                >
                  <Label
                    value={label}
                    position="insideBottomLeft"
                    style={{ fill: "#FFD700", fontSize: "12px", opacity: 0.4 }}
                  />
                </ReferenceLine>
              ))}
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke={isDarkMode ? "#60a5fa" : "#007bff"}
              strokeWidth={3}
              dot={{ r: 3 }}
            />
            <Tooltip
              contentStyle={
                isDarkMode
                  ? {
                      backgroundColor: "#1f2937",
                      color: "#f3f4f6",
                      border: "1px solid #374151",
                    }
                  : undefined
              }
            />
            <CartesianGrid stroke={isDarkMode ? "#374151" : "#e0e0e0"} />
            <XAxis dataKey="date" stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
            <YAxis stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
