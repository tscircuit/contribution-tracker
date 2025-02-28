import { Pie } from "react-chartjs-2"
import { useContributorsData } from "../hooks/useContributorsData"

const PRsByContributorPieChart = () => {
  const { sortedContributors } = useContributorsData()

  const data = {
    labels: sortedContributors.map(([username]) => username),
    datasets: [
      {
        data: sortedContributors.map(([, stats]) => stats.prsMerged),
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
      <h2>PRs by Contributor</h2>
      <Pie data={data} />
    </div>
  )
}

export default PRsByContributorPieChart
