import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReportCard from "../../../components/reports/ReportCard";
import LogCard from "../../../components/reports/LogCard";

const ReportsAndLogs = () => {

  const navigate = useNavigate();

  // Static Log Data
  const loginLogs = [
    { time: "10:15AM", activity: "Admin Login", status: "Sent", statusColor: "text-green-600" },
    { time: "9:15AM", activity: "Doctor Login", status: "Sent", statusColor: "text-green-600" },
  ];

  const otpLogs = [
    { time: "10:15AM", activity: "Sent OTP", status: "Sent", statusColor: "text-green-600" },
    { time: "9:15AM", activity: "OTP Verified", status: "Verified", statusColor: "text-orange-500" },
  ];

  const billingLogs = [
    { time: "10:15AM", activity: "Invoice Generated", status: "Success", statusColor: "text-green-600" },
    { time: "9:15AM", activity: "Bill PDF Download", status: "Success", statusColor: "text-green-600" },
  ];

  return (
    <div className="bg-white p-8 min-h-screen">
      <h1 className="text-xl font-semibold text-[#536CB3]">
        Reports & Logs
      </h1>

      {/* Report Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6 mb-10">
        <ReportCard
          title="Daily OPD Report"
          description="View Daily OPD Statistics"
          onClick={() => navigate("/admin/reports/daily-opd")}
        />

        <ReportCard
          title="Monthly Billing Report"
          description="View Monthly Revenue Summary"
          onClick={() => navigate("/admin/reports/monthly-billing")}
        />

        <ReportCard
          title="Doctor Consultation Report"
          description="View Consultation by Doctor"
          onClick={() => navigate("/admin/reports/doctor-consultation")}
        />
      </div>
 
      {/* Activity Logs */}
      <h2 className="text-lg font-semibold text-[#536CB3] mb-6">
        Activity Logs
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <LogCard title="Login Logs" logs={loginLogs} />
        <LogCard title="OTP Activity Logs" logs={otpLogs} />
        <LogCard title="Billing & Prescription Logs" logs={billingLogs} />
      </div>
    </div>
  );
};

export default ReportsAndLogs;