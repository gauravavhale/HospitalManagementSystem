import React from "react";

const DailyOPDReport = () => {
  // Dummy Data (will come from API later)
  const summaryData = {
    totalAppointments: 24,
    completedConsultations: 18,
    totalCollection: 12600,
  };

  const appointmentData = [
    {
      id: "APO263778",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
    },
    {
      id: "APO263779",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
    },
    {
      id: "APO263780",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
    },
    {
      id: "APO263781",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
    },
    {
      id: "APO263782",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Cancelled",
      fee: 600,
    },
    {
      id: "APO263783",
      patientName: "Amit Sharma",
      doctor: "Dr. Rajesh Mehta",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-blue-900 mb-6">
        Daily OPD Report
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Appointment */}
        <div className="bg-blue-200 rounded-lg p-6 text-center shadow">
          <p className="text-gray-700 font-medium">Total Appointment</p>
          <h2 className="text-2xl font-bold mt-2">
            {summaryData.totalAppointments}
          </h2>
        </div>

        {/* Consultation Completed */}
        <div className="bg-blue-300 rounded-lg p-6 text-center shadow">
          <p className="text-gray-700 font-medium">
            Consultation Completed
          </p>
          <h2 className="text-2xl font-bold mt-2">
            {summaryData.completedConsultations}
          </h2>
        </div>

        {/* Total OPD Collection */}
        <div className="bg-blue-200 rounded-lg p-6 text-center shadow">
          <p className="text-gray-700 font-medium">Total OPD Collection</p>
          <h2 className="text-2xl font-bold mt-2">
            ₹{summaryData.totalCollection.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-blue-900">
            Appointment ID
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="px-4 py-3">Appointment ID</th>
                <th className="px-4 py-3">Patient Name</th>
                <th className="px-4 py-3">Doctor</th>
                <th className="px-4 py-3">Visit Time</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">OPD Fee</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.patientName}</td>
                  <td className="px-4 py-3">{item.doctor}</td>
                  <td className="px-4 py-3">{item.time}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      item.status === "Completed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-4 py-3">₹{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyOPDReport;