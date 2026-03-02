import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientDashboardData } from "../../data/patientDashboardDummyData";

const PatientDashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(patientDashboardData);
    // Later replace with API call
  }, []);

  if (!data) return null;

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-[#536CB3]">
        Patient Dashboard
      </h1>
      <p className="text-gray-500 mb-6">
        Manage your patients & appointments
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg shadow">
          <p className="text-sm">Book Appointment</p>
          <h2 className="text-2xl font-bold mt-2">
            {data.summary.totalAppointments}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-blue-700 text-white p-6 rounded-lg shadow">
          <p className="text-sm">View Prescriptions</p>
          <h2 className="text-2xl font-bold mt-2">
            {data.summary.totalPrescriptions}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-700 text-white p-6 rounded-lg shadow">
          <p className="text-sm">View prescription</p>
          <h2 className="text-2xl font-bold mt-2">
            ₹ {data.summary.prescriptionAmount}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-purple-600 text-white p-6 rounded-lg shadow">
          <p className="text-sm">View Bills</p>
          <div className="mt-2">
            <p className="text-xs bg-white text-purple-600 inline-block px-2 py-1 rounded mb-1">
              Prescription
            </p>
            <p className="text-xs bg-white text-purple-600 inline-block px-2 py-1 rounded">
              Invoices
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-8">

          {/* Upcoming Appointments */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-4">
              My Upcoming Appointments
            </h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-2 px-2">Date</th>
                  <th className="text-left">Doctor</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.upcomingAppointments.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-2">{item.date}</td>
                    <td>{item.doctor}</td>
                    <td>{item.time}</td>
                    <td>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                        Upcoming
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Confirmed Appointments */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-4">
              My Upcoming Appointments
            </h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-2 px-2">Date</th>
                  <th className="text-left">Doctor</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.confirmedAppointments.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-2">{item.date}</td>
                    <td>{item.doctor}</td>
                    <td>{item.time}</td>
                    <td>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                        Confirmed
                      </span>
                    </td>
                    <td>
                      <button className="text-xs bg-gray-200 px-2 py-1 rounded">
                        Reschedule
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Prescription */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-4">
              Recent Prescription
            </h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-2 px-2">Date</th>
                  <th className="text-left">Doctor</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.recentPrescriptions.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-2">{item.date}</td>
                    <td>{item.doctor}</td>
                    <td>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                        View PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Latest Vitals */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-4">
              Latest Vitals
            </h3>
            <p className="mb-2">BP 120/80 mmHg</p>
            <p className="mb-2">Weight 75 Kg</p>
            <p>Pulse 80 bpm</p>
          </div>

          {/* Billing History */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-4">
              Billing History
            </h3>

            <p className="text-sm font-medium">
              Last OPD Bill
            </p>
            <p className="text-xs text-gray-500 mb-4">
              9 Jan 2026 – 02:30 PM
            </p>

            <p className="text-sm">Consultation</p>
            <p className="text-xs text-gray-500 mb-2">
              paid in full
            </p>

            <p className="text-sm">OPD Bill</p>
            <p className="text-xs text-gray-500 mb-4">
              800 Paid in Full
            </p>

            <button
              onClick={() => navigate("/patient/bill-details/1")}
              className="bg-blue-600 text-white w-full py-2 rounded"
            >
              View Bill
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;