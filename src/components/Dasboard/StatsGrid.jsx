import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";

const Stats = [
  {
    title: "Total Revenue",
    value: "$225,573",
    change: "+22.5%",
    trend: "up",
    icon: DollarSign,
    color: " from-yellow-200 via-green-200 to-green-500",
    bgcolor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active User",
    value: "9,549",
    change: "+9.2%",
    trend: "up",
    icon: Users,
    color: " from-blue-100 via-blue-300 to-blue-500",
    bgcolor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "3,840",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
    color: " from-rose-700 to-pink-600",
    bgcolor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "55,792",
    change: "-1.1%",
    trend: "down",
    icon: Eye,
    color: "from-red-500 to-red-800",
    bgcolor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {Stats.map((stats, index) => {
        return (
          <div
            className="bg-gradient-to-br from-red-900/40 via-black/40 to-black/60
             backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg shadow-red-900/30 hover:shadow-2xl 
             hover:shadow-red-900/50ring-1 ring-white/10 transition-all duration-300 group"
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stats.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {stats.value}
                </p>
                <div className="flex items-center space-x-2">
                  {stats.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      stats.trend === "up" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stats.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs Last month
                  </span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl ${stats.bgcolor} group-hover:scale-110 
                  transition-all duration-300`}
              >
                <stats.icon className={`w-6 h-6 ${stats.textColor}`} />
              </div>
            </div>
            {/* Progressbar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ${stats.color}`}
                style={{ width: stats.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
