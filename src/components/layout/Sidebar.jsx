import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  User,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analythics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2,4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "rolers", label: "Roles & Permission" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "order", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "80",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar({ collapsed, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analythics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-72"}
        bg-gradient-to-b from-black to-red-800/90
        dark:from-black dark:to-red-900/90
        backdrop-blur-xl border-r border-red-700/50
        flex flex-col relative z-10`}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-800 rounded-xl 
            flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-2xl font-medium font-poppins text-slate-800 dark:text-white">
                Dashify
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administration Console
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Dynamic Menus */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems?.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-white
                ${
                  currentPage === item.id || item.active
                    ? "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-600 to-rose-400 text-white shadow-xl shadow-rose-700/60 ring-1 ring-rose-400/40 scale-[1.02]"
                    : "text-slate-600 dark:text-slate-300 hover:bg-rose-900/30 dark:hover:bg-rose-900/40"
                }`}
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.id);
                } else {
                  onPageChange(item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3 text-white">
                <item.icon className="w-5 h-5 text-white" />

                {!collapsed && (
                  <span className="font-medium ml-2 text-white">
                    {item.label}
                  </span>
                )}

                {!collapsed && (
                  <>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-700 text-white rounded-full">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>

              {!collapsed && item.submenu && (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>

            {/* Sub Menu */}
            {!collapsed && item.submenu && expandedItems.has(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu?.map((subitem) => (
                  <button
                    className="w-full text-left p-2 text-sm text-slate-600 
                  dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 
                  hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg
                  transition-all "
                  >
                    {subitem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=80&h=80&fit=crop"
              alt="Cute dog"
              className="w-10 h-10 rounded-full ring-2 ring-amber-600"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Jeneal Fuellas
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
