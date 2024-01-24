import * as React from "react";
import ChartCard from "../ui/Chart";

const doughnutData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      weight: 1,
    },
  ],
};
function PieChart() {
  /* const pieChartRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (pieChartRef.current) {
      const chart = new Chart(pieChartRef.current, {
        type: "doughnut",
        data: doughnutData,
      });

      return () => {
        chart.destroy();
      };
    }
  }, []); */
  return (
    <ChartCard
      chartType="doughnut"
      data={doughnutData}
      label="My First Dataset"
    />
  );
}

export default PieChart;
