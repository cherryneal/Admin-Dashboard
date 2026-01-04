import { MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";
import React from "react";
const recentOrders = [
  {
    id: "#3829",
    customer: "Alex Jordan Miller",
    product: 'MacBook Pro 16"',
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3828",
    customer: "Maria Isabel Santos",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3827",
    customer: "Sophia Anne Carter",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#3826",
    customer: "Michael Andrew Thompson",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
];
const topProducts = [
  {
    name: 'MacBook Pro 16"',
    sales: "1234",
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: "2156",
    revenue: "$2,587,844",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: "3421",
    revenue: "$852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: "987",
    revenue: "$591,213",
    trend: "up",
    change: "+15%",
  },
];

function TableSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };
  return (
    <div className="space-y-6">
      <div
        className="bg-gradient-to-br from-red-900/40 via-black/40 to-black/60
             backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg shadow-red-900/30 hover:shadow-2xl 
             hover:shadow-red-900/50ring-1 ring-white/10 transition-all duration-300 group"
      >
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer service
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => {
                return (
                  <tr
                    className="border-b border-slate-200/50 dark:border-slate-700/50
                hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="p-4" key={index}>
                      <span className="text-sm font-medium text-blue">
                        {order.id}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-800 dark:text-white">
                        {order.customer}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-800 dark:text-white">
                        {order.product}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-800 dark:text-white">
                        {order.amount}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-800 dark:text-white">
                        <MoreHorizontal className="w-4 h-5" />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="bg-gradient-to-br from-red-900/40 via-black/40 to-black/60
             backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg shadow-red-900/30 hover:shadow-2xl 
             hover:shadow-red-900/50ring-1 ring-white/10 transition-all duration-300 group"
      >
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex item-center justify-between">
            <div className=" text-lg font-bold text-slate-800 dark:text-white ">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white"></h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best Performing Producats
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => {
            return (
              <div
                className="flex item-center jutify-between p-4 rounded-xl hover:bg-slate-50 
          dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {product.sales}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.revenue}
                  </p>
                  <div className="flex items-center space-x-1">
                    {product.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        product.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TableSection;
