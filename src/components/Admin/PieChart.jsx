import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js directly

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/total-user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error("API returned error status");
      }
      setChartData({
        labels: ["Doctors", "Patients"],
        datasets: [
          {
            data: [data.data.doctor, data.data.patient],
            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            hoverOffset: 4,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById("myPieChart");
      new Chart(ctx, {
        type: "pie",
        data: chartData,
      });
    }
  }, [chartData]);

  return <canvas id="myPieChart" width="400" height="400" />;
};

export default PieChart;
