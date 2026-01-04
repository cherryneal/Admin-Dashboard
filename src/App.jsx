import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useState } from "react";
import Dashboard from "./components/Dasboard/Dashboard";

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-t from-red-800 via-red-900 to-black transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden ">
          <Header
            sideBarCollapsed={sideBarCollapsed}
            onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
          />

          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              {currentPage === "dashboard" && <Dashboard />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
