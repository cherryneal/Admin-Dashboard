import {
  Menu,
  Search,
  ListFilter,
  Plus,
  Sun,
  Bell,
  Settings,
  ChevronDown,
} from "lucide-react";
import React from "react";

function Header({ setSideBarCollapsed, onToggleSidebar }) {
  return (
    <div
      className="bg-white/-80bg-grayv-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-40 backdrop-saturate-100 
      backdrop-contrast-100 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi
      B2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA
      3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjQ0Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjA
      lIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1ma
      Wx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4xMTYiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y
      2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFy
      GlnaHRpbmcgc3VyZmFjZVNjYWxlPSIxOCIgc3BlY3VsYXJDb25zdGFudD0iMC43IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjE
      wMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAgICAgICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj
      48L2ZlRGlzdGFudExpZ2h0PgogICAgICAgICAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3
      aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0ic3BlY3VsYXJMaWdodGluZyIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGh
      laWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+CiAgICAgIDwvc3ZnPgogICAg')] bg-blend-overlay backdrop-blur-xl border-b
   border-red-700/50 px-6 py-4 "
      onClick={onToggleSidebar}
    >
      <div className="flex items-center justify-between ">
        {/*Left Section*/}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300
               hover:bg-slate-200 dark:hover:bg-slate-700
               transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-medium font-poppins text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className=" text-sm text-slate-300">
              Hey Jeneal! Here’s what’s on your dashboard today.
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search
              className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
             text-slate-400"
            />
            <input
              type="text"
              placeholder="Search Anything"
              className="
      w-full pl-10 pr-4 py-2.5
      rounded-xl
      bg-black/40 backdrop-blur-md
      border border-white/10
      text-white placeholder-white/60
      focus:outline-none focus:ring-2 focus:ring-red-700
      transition-all
    "
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
     text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <ListFilter />
            </button>
          </div>
        </div>

        {/*Right*/}
        <div className="flex items-center space-x-3">
          {/*Quic Action*/}
          <button
            className="hidden lg:flex items-center space-x-2 py-2 px-4
             bg-[conic-gradient(from_180deg_at_left,theme(colors.rose.900),theme(colors.amber.800)))]
              text-white rounded-xl hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </button>
          {/*Toggle*/}
          <button
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-color"
          >
            <Sun className="w-5 h-5" />
          </button>

          {/* Notification */}
          <button
            className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
       hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs 
        rounded-full flex items-center justify-center"
            >
              8
            </span>
          </button>

          {/* Setting */}
          <button
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
             hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/*user profile*/}
          <div
            className="flex items-center space-x-3 pl-3 border-l border-slate-200
          dark:border-slate-700"
          >
            <img
              src="https://placedog.net/80/80"
              alt="Cute dog"
              className="w-10 h-10 rounded-full ring-2 ring-amber-600"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Jeneal Fuellas
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
