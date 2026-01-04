import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 38000 },
    { month: "Mar", revenue: 48000, expenses: 35000 },
    { month: "Apr", revenue: 61000, expenses: 42000 },
    { month: "May", revenue: 55000, expenses: 40000 },
    { month: "Jun", revenue: 67000, expenses: 45000 },
    { month: "Jul", revenue: 72000, expenses: 48000 },
    { month: "Aug", revenue: 69000, expenses: 46000 },
    { month: "Sep", revenue: 78000, expenses: 52000 },
    { month: "Oct", revenue: 74000, expenses: 50000 },
    { month: "Nov", revenue: 82000, expenses: 55000 },
    { month: "Dec", revenue: 89000, expenses: 58000 },
  ];
  return (
    <div
      className="bg-gradient-to-br from-red-900/40 via-black/40 to-black/60
             backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg shadow-red-900/30 hover:shadow-2xl 
             hover:shadow-red-900/50ring-1 ring-white/10 transition-all duration-300 group "
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-6">
          {/* Revenue */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-3 bg-gradient-to-r from-rose-700 to-pink-600 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>

          {/* Expenses */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-3 bg-gradient-to-r from-red-500 to-red-800 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expenses
            </span>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              {/* Revenue */}
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="50%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>

              {/* Expenses */}
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#BBF7D0" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>

            {/* 🔹 Softer grid lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#CBD5E1"
              opacity={0.25}
            />

            {/* 🔹 Lighter month labels */}
            <XAxis
              dataKey="month"
              stroke="#94A3B8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            {/* 🔹 Lighter $1000k values */}
            <YAxis
              stroke="#94A3B8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, ""]}
            />

            <Bar
              dataKey="revenue"
              fill="url(#revenueGradient)"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />

            <Bar
              dataKey="expenses"
              fill="url(#expensesGradient)"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
