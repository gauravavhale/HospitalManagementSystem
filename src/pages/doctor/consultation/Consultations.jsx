import { useNavigate } from "react-router-dom";
import { consultations } from "../../../data/consultationDummyData";

const Consultations = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-4">
        Consultations
      </h2>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search patient"
          className="border px-3 py-2 rounded w-64"
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Patient Name</th>
              <th>Consultation Date</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {consultations.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.patientName}</td>
                <td>{item.consultationDate}</td>
                <td>{item.doctor}</td>
                <td>{item.diagnosis}</td>
                <td>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    {item.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/doctor/consultations/${item.id}`)
                    }
                    className="text-blue-600 underline"
                  >
                    View Consultation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consultations;