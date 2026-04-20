import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UnemploymentChart = ({ data }) => {
  // Filtramos el total nacional y tomamos las 10 provincias con mayor tasa
  const chartData = Object.values(data)
    .filter((d) => d.provincia !== "Nacional")
    .sort((a, b) => b.tasa_desocupacion - a.tasa_desocupacion)
    .slice(0, 10)
    .map((d) => ({
      provincia: d.provincia,
      tasa: parseFloat((d.tasa_desocupacion * 100).toFixed(1)),
    }));

  return (
    <div className="glass-panel">
      <h3 style={{ color: "#880e4f", marginTop: 0 }}>
        Top 10 Mayor Desocupación (%)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(136, 14, 79, 0.1)"
          />
          <XAxis
            dataKey="provincia"
            tick={{ fill: "#880e4f", fontSize: 12 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis tick={{ fill: "#880e4f" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              border: "none",
            }}
            itemStyle={{ color: "#d81b60" }}
          />
          <Bar dataKey="tasa" fill="#d81b60" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UnemploymentChart;
