import * as React from "react";
import ChartCard from "../ui/Chart";

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

function BarChart() {
  /*  const chartRef = React.useRef<HTMLCanvasElement>(null);
  const pieChartRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisions By Year",
              data: data.map((row) => row.count),
              barThickness: 16,
            },
          ],
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, []); */

  return <ChartCard data={data} label="Acquisions By Year" chartType="bar" />;
}

export default BarChart;
