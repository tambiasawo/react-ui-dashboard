import React from "react";
import { Chart, registerables } from "chart.js";
import Paper from "@mui/material/Paper";

type Props = {
  data: any;
  chartType: "bar" | "doughnut" | "pie";
  label: string;
};

const ChartCard = ({ data, chartType, label }: Props) => {
  const chartRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: chartType,
        data: Array.isArray(data)
          ? {
              labels: data.map((row) => row.year),
              datasets: [
                {
                  label,
                  data: data.map((row) => row.count),
                  barThickness: 16,
                },
              ],
            }
          : data,
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);
  return (
    <Paper>
      <canvas ref={chartRef} />
    </Paper>
  );
};
Chart.register(...registerables);

export default ChartCard;
