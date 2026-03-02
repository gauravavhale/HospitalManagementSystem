import React, { useState } from "react";
import TodayAppointments from "./TodayAppointments";
import UpcomingAppointments from "./UpcomingAppointments";
import CompletedAppointments from "./CompletedAppointments";
import CheckedInAppointments from "./CheckedInAppointments";

const DoctorAppointments = () => {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = ["Today", "Upcoming", "Completed", "Checked-In"];

  const renderComponent = () => {
    switch (activeTab) {
      case "Today":
        return <TodayAppointments />;
      case "Upcoming":
        return <UpcomingAppointments />;
      case "Completed":
        return <CompletedAppointments />;
      case "Checked-In":
        return <CheckedInAppointments />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Appointments
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 border rounded ${
              activeTab === tab
                ? "bg-[#536CB3] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render Selected Component */}
      {renderComponent()}
    </div>
  );
};

export default DoctorAppointments;
