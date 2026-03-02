import React from "react";

const statsData = [
  {
    title: "Today Appointment",
    value: 5,
    bg: "bg-yellow-500",
  },
  {
    title: "Pending Appointments",
    value: 12,
    bg: "bg-blue-600",
  },
  {
    title: "New Patients",
    value: 3,
    bg: "bg-green-600",
  },
];

const appointmentsData = [
  {
    name: "Rohan Smith",
    time: "09:00 AM",
    reason: "Hypertension",
    status: "Upcoming",
  },
  {
    name: "Mary Smith",
    time: "08:00 AM",
    reason: "High Cholesterol",
    status: "Upcoming",
  },
  {
    name: "Michael Brown",
    time: "07:00 AM",
    reason: "Follow-up",
    status: "Completed",
  },
  {
    name: "Jessica Lee",
    time: "10:00 AM",
    reason: "Back Pain",
    status: "Upcoming",
  },
  {
    name: "John Smith",
    time: "11:00 AM",
    reason: "Chest Pain",
    status: "Upcoming",
  },
  {
    name: "Emily Devin",
    time: "09:00 AM",
    reason: "Routine Check-up",
    status: "Upcoming",
  },
];

const patientOverview = [
  {
    name: "Rohan Smith",
    age: 45,
    lastVisit: "April 10, 2025",
    condition: "Hypertension",
  },
  {
    name: "John Doe",
    age: 45,
    lastVisit: "April 10, 2025",
    condition: "Hypertension",
  },
  {
    name: "John Doe",
    age: 45,
    lastVisit: "April 10, 2025",
    condition: "Hypertension",
  },
  {
    name: "John Doe",
    age: 45,
    lastVisit: "April 10, 2025",
    condition: "Hypertension",
  },
];

const DoctorDashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      
      <h2 className="text-2xl font-semibold text-blue-700">
        Welcome&lt; DR Sarah Wilson!
      </h2>
      <p className="text-gray-600 mb-6">
        Manage your patients & appointments
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} text-white p-6 rounded-lg shadow-md`}
          >
            <h4 className="text-lg">{item.title}</h4>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Today's Appointments
        </h3>

        {/* Search & Date */}
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search for Patient"
            className="border p-2 rounded w-full md:w-1/3"
          />
          <input
            type="date"
            className="border p-2 rounded w-full md:w-1/4"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border">Patient Name</th>
                <th className="p-3 border">Appointment Time</th>
                <th className="p-3 border">Reason</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.time}</td>
                  <td className="p-3 border">{item.reason}</td>
                  <td className="p-3 border">
                    <span
                      className={`px-3 py-1 rounded text-white text-xs ${
                        item.status === "Completed"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 border">
                    {item.status === "Completed" ? (
                      <button className="text-blue-600 underline">
                        View Details
                      </button>
                    ) : (
                      <button className="text-blue-600 underline">
                        Start Consultation
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Patient Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">
          Patient Overview
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border">Patient Name</th>
                <th className="p-3 border">Age</th>
                <th className="p-3 border">Last Visit</th>
                <th className="p-3 border">Condition</th>
              </tr>
            </thead>
            <tbody>
              {patientOverview.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="p-3 border text-blue-600 cursor-pointer">
                    {item.name}
                  </td>
                  <td className="p-3 border">{item.age}</td>
                  <td className="p-3 border">{item.lastVisit}</td>
                  <td className="p-3 border">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
