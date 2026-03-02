import React from "react";

const DoctorConsultationReport = () => {
  // Dummy Summary Data
  const summaryData = {
    totalAppointments: 24,
    completedConsultations: 18,
    totalCollection: 152600,
  };

  // Dummy Table Data
  const consultationData = [
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
    {
      date: "5 Jan 2026",
      patientName: "Amit Sharma",
      time: "09:00 AM",
      status: "Completed",
      fee: 600,
      rating: 4,
    },
  ];

  // Star Render Function
  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Doctor Consultation Report
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#D9E1F2] rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-700 font-medium">Total Appointment</p>
          <h2 className="text-2xl font-bold mt-2">
            {summaryData.totalAppointments}
          </h2>
        </div>

        <div className="bg-[#C9D5F6] rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-700 font-medium">
            Consultation Completed
          </p>
          <h2 className="text-2xl font-bold mt-2">
            {summaryData.completedConsultations}
          </h2>
        </div>

        <div className="bg-[#D9E1F2] rounded-lg p-6 text-center shadow-sm">
          <p className="text-gray-700 font-medium">Total OPD Collection</p>
          <h2 className="text-2xl font-bold mt-2">
            ₹{summaryData.totalCollection.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#536CB3]">
            Appointment ID
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Patient Name</th>
                <th className="px-4 py-3">Visit Time</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">OPD Fee</th>
                <th className="px-4 py-3">Ratings</th>
              </tr>
            </thead>

            <tbody>
              {consultationData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.patientName}</td>
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

                  <td className="px-4 py-3 text-orange-500 font-medium">
                    {renderStars(item.rating)}
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

export default DoctorConsultationReport;