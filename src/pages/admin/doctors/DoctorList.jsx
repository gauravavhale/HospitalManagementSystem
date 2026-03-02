import React, { useState } from "react";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr Mehta",
      specialization: "General Physician",
      mobile: "+8964325678",
      status: true, // true = Active
    },
    {
      id: 2,
      name: "Dr Mehta",
      specialization: "General Physician",
      mobile: "+8964325678",
      status: true,
    },
    {
      id: 3,
      name: "Dr Mehta",
      specialization: "General Physician",
      mobile: "+8964325678",
      status: false,
    },
    {
      id: 4,
      name: "Dr Mehta",
      specialization: "General Physician",
      mobile: "+8964325678",
      status: true,
    },
  ]);

  // Toggle Function
  const handleToggle = (id) => {
    const updatedDoctors = doctors.map((doc) =>
      doc.id === id ? { ...doc, status: !doc.status } : doc
    );
    setDoctors(updatedDoctors);
  };

  return (
    <div className="bg-white p-8 min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#536CB3]">
        Doctor Management
      </h1>
      <p className="text-gray-500 mb-6">
        Manage your patients & appointments
      </p>

      {/* Top Controls */}
      <div className="flex items-center gap-4 mb-6">
        <select className="border border-gray-300 px-4 py-2 text-sm">
          <option>All Specialization</option>
        </select>

        <input
          type="text"
          placeholder="search"
          className="border border-gray-300 px-4 py-2 text-sm"
        />

        <button className="ml-auto bg-[#536CB3] text-white px-8 py-2 text-sm font-medium">
          +Add Doctor
        </button>
      </div>

      <div className="flex items-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          <span className="text-sm">Active</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 border border-gray-400 rounded-full"></span>
          <span className="text-sm text-gray-500">Inactive</span>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Specialization</th>
              <th className="border px-4 py-2">Mobile No</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc, index) => (
              <tr key={doc.id}>
                <td className="border px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border px-4 py-2">
                  {doc.name}
                </td>
                <td className="border px-4 py-2">
                  {doc.specialization}
                </td>
                <td className="border px-4 py-2">
                  {doc.mobile}
                </td>

                {/* Status Text */}
                <td
                  className={`border px-4 py-2 font-medium ${
                    doc.status
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {doc.status ? "Active" : "Inactive"}
                </td>

                {/* Toggle Button */}
                <td className="border px-4 py-2">
                  <div
                    onClick={() => handleToggle(doc.id)}
                    className={`w-10 h-5 flex items-center rounded-full px-1 cursor-pointer transition-all duration-300 ${
                      doc.status
                        ? "bg-green-600"
                        : "bg-black"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                        doc.status
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorManagement;
