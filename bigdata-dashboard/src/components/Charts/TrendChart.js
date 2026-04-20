import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Charts.css";

const TrendChart = ({ data }) => {
  return (
    <div className="glass-panel interactive-panel animate-entrance delay-3">
      <h3 style={{ color: "#880e4f", marginTop: 0 }}>
        Evolución Nacional (2019 - 2023)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTasa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e91e63" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e91e63" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(136, 14, 79, 0.1)"
          />
          <XAxis dataKey="fecha" tick={{ fill: "#880e4f", fontSize: 12 }} />
          <YAxis tick={{ fill: "#880e4f" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              border: "1px solid rgba(233, 30, 99, 0.3)",
            }}
            itemStyle={{ color: "#d81b60", fontWeight: "bold" }}
          />
          <Area
            type="monotone"
            dataKey="tasa"
            stroke="#c2185b"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorTasa)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
