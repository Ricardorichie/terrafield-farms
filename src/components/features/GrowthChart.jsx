import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "12px 14px",
          border: "1px solid #eee",
          borderRadius: 12,
          boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
          fontSize: 12,
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 8, color: "#111827" }}>
          {label}
        </div>
        {payload.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: entry.color,
                display: "inline-block",
              }}
            />
            <span style={{ color: "#6b7280" }}>{entry.name}:</span>
            <span style={{ fontWeight: 700 }}>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const GrowthChart = ({ data, height = 360, showTitle = true }) => {
  return (
    <div
      style={{
        width: "100%",
        height,
        background: "#fff",
        border: "1px solid #eef2f7",
        borderRadius: 14,
        padding: "16px",
      }}
    >
      {showTitle && (
        <h3 style={{ margin: "0 0 14px 0" }}>
          Capacity Growth Projections (2025–2030)
        </h3>
      )}

      <div style={{ width: "100%", height: showTitle ? height - 60 : height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 25, left: 10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "4px" }} />

            <Line
              type="monotone"
              dataKey="hectares"
              name="Cultivated Area (Ha)"
              stroke="#1A3C2A"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="greenhouses"
              name="Greenhouse Units"
              stroke="#789938"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="branches"
              name="Farm Branches"
              stroke="#8B5A2B"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
