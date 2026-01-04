import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Parts & Accessories",
    value: 400,
    color: "oklch(48.8% 0.243 264.376)",
  },
  { name: "Service & Repair", value: 300, color: "oklch(77.7% 0.152 181.912)" },
  { name: "Tires", value: 300, color: "oklch(64.6% 0.222 41.116)" },
  { name: "Detailing", value: 200, color: "oklch(50.5% 0.213 27.518)" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
      className="font-semibold"
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

function SalesChart() {
  return (
    <div
      className="bg-gradient-to-br from-red-900/40 via-black/40 to-black/60
             backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg shadow-red-900/30 hover:shadow-2xl 
             hover:shadow-red-900/50 ring-1 ring-white/10 transition-all duration-300 group"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Production Distribution
        </p>
      </div>

      <div className="h-45">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {item.name}
              </span>
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-white">
              {(
                (item.value / data.reduce((acc, curr) => acc + curr.value, 0)) *
                100
              ).toFixed(0)}
              %
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesChart;
