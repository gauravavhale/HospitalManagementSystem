import { useEffect, useState } from "react";
import StatCard from "../../components/common/StatCard";
import { dashboardStats,todaysAppointments } from "../../data/receptionDummyData";

const ReceptionDashboard = () => {
  const [stats, setStats] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // CURRENT: Using Dummy Data
    setStats(dashboardStats);
    setAppointments(todaysAppointments);

    // LATER: Replace above with API call
    /*
    fetch("/api/reception/today")
      .then(res => res.json())
      .then(data => {
        setStats(data.stats);
        setAppointments(data.appointments);
      });
    */
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Booked":
        return "bg-blue-500";
      case "Cancelled":
        return "bg-red-500";
      case "Check-in":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="pr-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Reception Dashboard
          </h2>
          <p className="text-sm text-gray-500">
            Manage your patients & appointments
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Date: {new Date().toDateString()}
        </p>
      </div>

      {/* Stats Section */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StatCard
            title="Today Appointments"
            value={stats.todayAppointments}
            bgColor="bg-yellow-500"
          />
          <StatCard
            title="Check-in Patients"
            value={stats.checkInPatients}
            bgColor="bg-blue-500"
          />
          <StatCard
            title="Completed Consultations"
            value={stats.completedConsultations}
            bgColor="bg-green-500"
          />
        </div>
      )}

      {/* Appointments Table */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">
          Today's Appointments
        </h3>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Appointment ID</th>
              <th className="p-3">Patient Name</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Time Slot</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b">
                <td className="p-3">{appt.id}</td>
                <td className="p-3">{appt.patientName}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.timeSlot}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-white text-xs rounded ${getStatusColor(
                      appt.status
                    )}`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="p-3 text-blue-500 cursor-pointer">
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceptionDashboard;
