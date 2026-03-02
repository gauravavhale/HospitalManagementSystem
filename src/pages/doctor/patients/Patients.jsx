import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const patients = [
    {
      id: 1,
      name: "Rahul Mehta",
      age: 30,
      gender: "Male",
      mobile: "3725269851",
      diagnosis: "Hypertension",
      date: "1 Jan 2026",
    },
    {
      id: 2,
      name: "Rohan Smith",
      age: 45,
      gender: "Male",
      mobile: "9876543210",
      diagnosis: "Diabetes",
      date: "5 Jan 2026",
    },
  ];

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h2 className="text-xl font-semibold text-[#536CB3] mb-6">
        Patients
      </h2>

      {/* 🔎 Search Section */}
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

      {/* 📋 Table */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Diagnosis</th>
              <th className="p-3 text-left">Last Visit</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.age}</td>
                <td className="p-3">{p.gender}</td>
                <td className="p-3">{p.mobile}</td>
                <td className="p-3">{p.diagnosis}</td>
                <td className="p-3">{p.date}</td>
                <td className="p-3">
                  <button
                    onClick={() => navigate(`/doctor/patient/${p.id}`)}
                    className="text-[#536CB3] underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}

            {filteredPatients.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No Patients Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Patients;
