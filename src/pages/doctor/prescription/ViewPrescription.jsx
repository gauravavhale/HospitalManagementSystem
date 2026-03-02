import { consultations } from "../../../data/consultationDummyData";

const ViewPrescription = () => {

  const data = consultations[0];

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="bg-white max-w-6xl mx-auto p-6 shadow rounded">

        {/* Page Title */}
        <h2 className="text-xl font-semibold text-[#536CB3] mb-6">
          View Prescription
        </h2>

        {/* Hospital Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-blue-700">
            HOSPITAL <span className="text-green-600">MANAGEMENT SYSTEM</span>
          </h1>

          <div className="text-sm text-gray-600 mt-3">
            <p>City Hospital 123, ABC Road, Andheri</p>
            <p>West, Mumbai - 400058 Maharashtra, India</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>✉ Email: info@cityhospital.com</p>
          </div>
        </div>

        {/* Patient & Doctor Info */}
        <div className="flex justify-between gap-6 mb-6">
          
          <div className="border p-4 w-1/2 text-sm">
            <h3 className="font-semibold mb-2">Patient Information</h3>
            <p className="font-semibold">{data.patientName}</p>
            <p>Age {data.age}</p>
            <p>{data.gender}</p>
            <p>{data.phone}</p>
          </div>

          <div className="border p-4 w-1/2 text-sm">
            <h3 className="font-semibold mb-2">Doctor Information</h3>
            <p className="font-semibold">{data.doctor}</p>
            <p>Cardiologist</p>
            <p>{data.phone}</p>
            <p>Consultation: {data.consultationDate}</p>
          </div>

        </div>

        {/* Prescription Table */}
        <h3 className="font-semibold mb-2">Prescription</h3>

        <div className="border rounded overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Sr.</th>
                <th>Medicine Name</th>
                <th>Qty</th>
                <th>Frequency</th>
                <th>Days</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Instruction</th>
              </tr>
            </thead>

            <tbody>
              {data.prescription.map((med) => (
                <tr key={med.sr} className="border-t text-center">
                  <td className="p-2">{med.sr}</td>
                  <td>{med.medicine}</td>
                  <td>{med.qty}</td>
                  <td>{med.frequency}</td>
                  <td>{med.days}</td>
                  <td>{med.startDate}</td>
                  <td>{med.endDate}</td>
                  <td>{med.instruction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="bg-green-600 text-white px-4 py-2 text-sm rounded">
            + Add Medicine
          </button>
          <button className="bg-red-600 text-white px-4 py-2 text-sm rounded">
            Remove
          </button>
        </div>

        {/* Follow Up */}
        <h3 className="font-semibold mb-2">Follow - Up</h3>
        <div className="border p-4 text-sm mb-6">
          <p>Follow-up Doctor: {data.followUp.doctor}</p>
          <p>Follow-up Date: {data.followUp.date}</p>
          <p>Follow-up Time: {data.followUp.time}</p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#536CB3] text-white px-6 py-2 rounded text-sm">
            Save Consultation
          </button>
          <button className="bg-[#536CB3] text-white px-6 py-2 rounded text-sm">
            Generate PDF
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded text-sm">
            Send via Whatsapp
          </button>
          <button className="bg-red-200 text-red-700 px-6 py-2 rounded text-sm">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewPrescription;