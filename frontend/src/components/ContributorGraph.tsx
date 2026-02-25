import { useMemo, useState } from "react"
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

const SCORE_LABEL_ENTRIES: [number, string][] = [
  [3, "⭐"],
  [10, "⭐⭐"],
  [30, "⭐⭐⭐"],
  [50, "👑"],
  [75, "👑👑"],
  [100, "👑👑👑"],
]

const DOT_CONFIG = { r: 3 }
const CHART_CONTAINER_STYLE = { width: "100%", height: 400 }
const LABEL_STYLE = { fill: "#FFD700", fontSize: "12px", opacity: 0.4 }

interface ContributorGraphProps {
  username: string
  lastEightWeeksContributions: (username: string) => any[]
}

export default function ContributorGraph({
  username,
  lastEightWeeksContributions,
}: ContributorGraphProps) {
  const [selectedMetric, setSelectedMetric] = useState("prsMerged")

  const graphData = useMemo(
    () => lastEightWeeksContributions(username),
    [username, lastEightWeeksContributions],
  )

  return (
    <div className="p-4 bg-white shadow-sm rounded-lg mb-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <h2 className="text-lg font-semibold">Contributor Activity</h2>
        <div className="flex items-center space-x-4">
          <select
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
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
      <div style={CHART_CONTAINER_STYLE}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            {selectedMetric === "score"
              ? SCORE_LABEL_ENTRIES.map(([score, label]) => (
                  <ReferenceLine
                    key={score}
                    y={score}
                    stroke="#FFEA00"
                    strokeOpacity={0.8}
                    strokeDasharray="9 12"
                  >
                    <Label
                      value={label}
                      position="insideBottomLeft"
                      style={LABEL_STYLE}
                    />
                  </ReferenceLine>
                ))
              : null}
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke="#007bff"
              strokeWidth={3}
              dot={DOT_CONFIG}
            />
            <Tooltip />
            <CartesianGrid stroke="#e0e0e0" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
