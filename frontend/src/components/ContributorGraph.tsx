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

export default function ContributorGraph({ username }: { username: string }) {
  const { last8WeeksData } = useContributorsData()

  // State for the selected metric
  const [selectedMetric, setSelectedMetric] = useState("prsMerged")

  // Fetch graph data based on the username and includeSkeletonDataSet toggle.
  const graphData = useMemo(
    () => last8WeeksData(username).slice(0, 25),
    [username, last8WeeksData],
  )

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
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
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke="#007bff"
              strokeWidth={3}
              dot={{ r: 3 }}
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
