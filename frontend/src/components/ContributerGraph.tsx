import { useEffect, useState } from "react"
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

export default function ContributorGraph({ username }: { username: string }) {
  const { last8WeeksData } = useContributorsData()
  const data = last8WeeksData(username).splice(0, 25)
  console.log(data)

  return (
    <div style={{ width: "100%", height: 400 }}>
      {" "}
      {/* Adjust height as needed */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="approvalsGiven" stroke="#ff5733" />
          <Line type="monotone" dataKey="approvalsReceived" stroke="#33ff57" />
          <Line
            type="monotone"
            dataKey="bountiedIssuesCount"
            stroke="#5733ff"
          />
          <Line
            type="monotone"
            dataKey="bountiedIssuesTotal"
            stroke="#ff33a8"
          />
          <Line type="monotone" dataKey="issuesCreated" stroke="#33a8ff" />
          <Line type="monotone" dataKey="prsMerged" stroke="#ffcc00" />
          <Line type="monotone" dataKey="prsOpened" stroke="#cc00ff" />
          <Line type="monotone" dataKey="rejectionsGiven" stroke="#00ffcc" />
          <Line type="monotone" dataKey="rejectionsReceived" stroke="#ff6600" />
          <Line type="monotone" dataKey="reviewsReceived" stroke="#6600ff" />
          <Line type="monotone" dataKey="score" stroke="#00cc66" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
