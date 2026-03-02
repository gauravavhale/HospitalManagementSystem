import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAppointments } from "../../../data/patientAppointmentsDummy";

const PatientAppointments = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const navigate = useNavigate();

  const filteredAppointments = patientAppointments.filter(
    (appt) => appt.status === activeTab
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Appointments
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["Today", "Upcoming", "Completed", "Cancled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded border ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="space-y-6">
        {filteredAppointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-6 rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="text-blue-600 font-medium">
                Appointment ID: {appt.id}
              </p>
              <p className="font-semibold">{appt.doctor}</p>
              <p className="text-sm">{appt.specialization}</p>
              <p className="text-sm">
                Date {appt.date} Time: {appt.time}
              </p>
            </div>

            <div className="flex gap-3">
              {appt.checkedIn && (
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Checked In
                </button>
              )}

              <button
                onClick={() =>
                  navigate(`/patient/appointment-details/${appt.id}`)
                }
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                View Details
              </button>

              {!appt.checkedIn && (
                <button className="bg-red-600 text-white px-6 py-2 rounded">
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientAppointments;