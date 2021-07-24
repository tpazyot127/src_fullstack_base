import React from "react";
import { Line } from "react-chartjs-2"

function HomeChart() {
  return (
    <Line
      data={{ 
        labels: [
          "Africa",
          "Asia",
          "Europe",
        ],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
            ],
            data: [2478, 5267, 734]
          }
        ]
      }}
      option={{
        title: {
          display: true,
          text: "Predicted world population (millions) in 2050"
        }
      }}
    />
  );
}
export default HomeChart;
