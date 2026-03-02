import React, { useState } from "react";

const checkedInAppointmentsData = [
  {
    id: 1,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
  {
    id: 2,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
  {
    id: 3,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
  {
    id: 4,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
  {
    id: 5,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
  {
    id: 6,
    name: "Rohan Smith",
    date: "23 Jan 2026",
    time: "09:00AM",
    reason: "Hypertension",
    status: "Checked-In",
  },
];

const CheckedInAppointments = () => {
  const [search, setSearch] = useState("");

  const filteredData = checkedInAppointmentsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search patient"
          className="border px-3 py-2 rounded w-64 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-[#536CB3] text-white px-6 py-2 rounded">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Patient Name</th>
                <th className="p-3 border text-left">Appointment Date</th>
                <th className="p-3 border text-left">Time</th>
                <th className="p-3 border text-left">Reason</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border">{item.time}</td>
                  <td className="p-3 border">{item.reason}</td>
                  <td className="p-3 border">
                    <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 border">
                    <button className="text-[#536CB3] hover:underline">
                      Start Consultation
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="text-center text-gray-500 py-6">
              No Checked-In Appointments Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckedInAppointments;
