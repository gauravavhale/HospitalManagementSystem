import { TbUserSquare } from "react-icons/tb";
import { FiUserCheck } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

const AdminDashboard = () => {
  // Dummy Data (Replace with API Later)
  const stats = {
    totalDoctors: 28,
    totalPatients: 344,
    todayAppointments: 17,
    opdRevenue: 44000,
    ipdRevenue: 76900,
  };

  const appointments = [
    {
      id: "APPT-1001",
      patient: "Rohan Smith",
      doctor: "Dr. Anita Sharma",
      time: "10:00 AM",
      dept: "Cardiologist",
    },
    {
      id: "APPT-1002",
      patient: "Emily Devin",
      doctor: "Dr. Ajay Kothari",
      time: "10:45 AM",
      dept: "General Physician",
    },
    {
      id: "APPT-1003",
      patient: "Michael Brown",
      doctor: "Dr. Amit Varma",
      time: "11:30 AM",
      dept: "Neurologist",
    },
  ];

  // const revenueData = [
  //   { name: "Dec5", revenue1: 5000, revenue2: 2000 },
  //   { name: "Dec6", revenue1: 15000, revenue2: 8000 },
  //   { name: "Dec7", revenue1: 18000, revenue2: 17000 },
  //   { name: "Dec8", revenue1: 3000, revenue2: 20000 },
  //   { name: "Dec9", revenue1: 16000, revenue2: 12000 },
  //   { name: "Dec10", revenue1: 8000, revenue2: 10000 },
  // ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#536CB3]">
        Admin Dashboard
      </h1>
      <p className="text-gray-500 mb-6">
        Manage your patients & appointments
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-yellow-400 text-white p-5 rounded-lg shadow">
          <TbUserSquare size={28} />
          <p className="mt-3 text-sm">Total Doctors</p>
          <h2 className="text-2xl font-bold">
            {stats.totalDoctors}
          </h2>
        </div>

        <div className="bg-blue-500 text-white p-5 rounded-lg shadow">
          <FiUserCheck size={28} />
          <p className="mt-3 text-sm">Total Patients</p>
          <h2 className="text-2xl font-bold">
            {stats.totalPatients}
          </h2>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-lg shadow">
          <FaCalendarAlt size={28} />
          <p className="mt-3 text-sm">Today Appointments</p>
          <h2 className="text-2xl font-bold">
            {stats.todayAppointments}
          </h2>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-lg shadow">
          <FaDollarSign size={28} />
          <p className="mt-3 text-sm">Total Revenue</p>
          <h2 className="text-sm font-semibold">
            OPD ₹{stats.opdRevenue}
          </h2>
          <h2 className="text-sm font-semibold">
            IPD ₹{stats.ipdRevenue}
          </h2>
        </div>
      </div>

      {/* Today's Appointments */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="font-semibold mb-4">
          Today's Appointments
        </h2>

        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Appointment ID</th>
              <th className="p-3">Patient Name</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Time Slot</th>
              <th className="p-3">Department</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{appt.id}</td>
                <td className="p-3">{appt.patient}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">{appt.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Revenue Summary */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-semibold mb-4">
          Revenue Summary
        </h2>

        {/* <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue1" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer> */}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="border border-[#536CB3] text-[#536CB3] px-6 py-2 rounded">
          Add Doctor
        </button>

        <button className="bg-[#536CB3] text-white px-6 py-2 rounded">
          View Report
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
