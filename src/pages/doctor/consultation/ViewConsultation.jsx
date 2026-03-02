import { useParams } from "react-router-dom";
import { consultations } from "../../../data/consultationDummyData";

const ViewConsultation = () => {
  const { id } = useParams();
  const data = consultations.find((item) => item.id === id);

  if (!data) return <p>Consultation not found</p>;

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="bg-white p-6 rounded shadow-md max-w-6xl mx-auto">

        {/* Page Title */}
        <h2 className="text-xl font-semibold text-[#536CB3] mb-6">
          View Consultation
        </h2>

        {/* Patient Information */}
        <h3 className="font-semibold mb-2">Patient Information</h3>
        <div className="border p-4 mb-6 flex justify-between text-sm">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">{data.patientName}</p>
              <div className="flex gap-6 mt-1 text-gray-600">
                <span>Age {data.age}</span>
                <span>{data.gender}</span>
                <span>{data.phone}</span>
              </div>
            </div>
          </div>

          <div className="text-gray-600">
            <p>Patient ID: {data.patientId}</p>
            <p>Appointment ID: {data.appointmentId}</p>
            <p>Check-in Time: {data.checkInTime}</p>
          </div>
        </div>

        {/* Vitals */}
        <h3 className="font-semibold mb-2">Vitals</h3>
        <div className="flex gap-4 mb-6 text-sm">
          <div className="border px-4 py-2 rounded">Weight: {data.vitals.weight}</div>
          <div className="border px-4 py-2 rounded">Dias: {data.vitals.bp}</div>
          <div className="border px-4 py-2 rounded">Temperature: {data.vitals.temperature}</div>
          <div className="border px-4 py-2 rounded">Pulse: {data.vitals.pulse}</div>
        </div>

        {/* Doctor Consultation */}
        <h3 className="font-semibold mb-2">Doctor Consultation</h3>

        <p className="font-medium text-sm mb-1">Diagnosis</p>
        <div className="border p-3 mb-4 text-sm bg-gray-50">
          {data.diagnosis}
        </div>

        <p className="font-medium text-sm mb-1">Doctor Notes</p>
        <div className="border p-3 mb-4 text-sm bg-gray-50">
          {data.notes}
        </div>

        <div className="flex justify-between text-sm mb-6">
          <p>Consultation Fees ₹100</p>
          <p>Consultation Date {data.consultationDate}</p>
        </div>

        {/* Prescription */}
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

        {/* Add / Remove Buttons */}
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
          <button className="bg-gray-500 text-white px-6 py-2 rounded text-sm">
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

export default ViewConsultation;