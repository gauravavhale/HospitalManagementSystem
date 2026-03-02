import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  // const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  // const isDashboard = location.pathname.includes("dashboard");

  return (
    <>
      <Header />

      <div className="flex">
       {/* {isOpen && isDashboard && (
          <Sidebar role={role} />
       )} */}
        <Sidebar role={role} />
        <main className="flex-1 p-6 bg-white min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}
