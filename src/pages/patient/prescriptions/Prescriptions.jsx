import prescriptionDummyData from "../../../data/prescriptionDummyData";

const Prescriptions = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      
      <h2 className="text-[#536CB3] text-xl font-semibold mb-4">
        Prescriptions
      </h2>

      <h3 className="text-lg font-semibold mb-6">
        Last 6 Month
      </h3>

      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <table className="w-full border-collapse">
          
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold">
                Date
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold">
                doctor name
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold">
                Prescription ID
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold">
                Status
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {prescriptionDummyData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-sm">
                  {item.date}
                </td>

                <td className="px-6 py-4 text-sm">
                  {item.doctorName}
                </td>

                <td className="px-6 py-4 text-sm font-medium">
                  {item.id}
                </td>

                <td className="px-6 py-4 text-sm">
                  <span className="text-green-600 font-medium">
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:underline font-medium">
                    View PDF
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

export default Prescriptions;