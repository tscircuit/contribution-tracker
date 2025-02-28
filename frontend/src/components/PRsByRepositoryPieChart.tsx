import { Pie } from "react-chartjs-2"
import { useContributorsData } from "../hooks/useContributorsData"

const PRsByRepositoryPieChart = () => {
  const { repoDetails } = useContributorsData()

  const data = {
    labels: repoDetails.map((repo) => repo.name),
    datasets: [
      {
        data: repoDetails.map((repo) => repo.prs.length),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  }

  return (
    <div>
      <h2>PRs by Repository</h2>
      <Pie data={data} />
    </div>
  )
}

export default PRsByRepositoryPieChart
