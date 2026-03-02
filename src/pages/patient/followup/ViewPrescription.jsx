import React from "react";

const PatientViewPrescription = () => {
  const medicines = [1, 2, 3, 4, 5];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
        View Prescription
      </h2>

      <div className="bg-white p-6 border mb-6">
        <h3 className="font-semibold mb-4">Prescription</h3>

        <div className="grid grid-cols-7 bg-gray-200 p-3 text-sm font-semibold border">
          <div>Sr.</div>
          <div>Medicine Name</div>
          <div>Qty</div>
          <div>Frequency</div>
          <div>Days</div>
          <div>Start Date</div>
          <div>End Date</div>
        </div>

        {medicines.map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-7 p-3 text-sm border border-t-0 bg-white"
          >
            <div>{index + 1}</div>
            <div>Morphine 5 mg</div>
            <div>1</div>
            <div>Once Daily</div>
            <div>30</div>
            <div>1/1/2026</div>
            <div>16/1/2026</div>
          </div>
        ))}
      </div>

      <div className="flex gap-6">
        <button className="bg-[#536CB3] text-white px-8 py-2 rounded">
          Generate PDF
        </button>
        <button className="bg-[#536CB3] text-white px-8 py-2 rounded">
          View Bill
        </button>
        <button className="bg-red-200 px-8 py-2 rounded">
          Back to Appointment
        </button>
      </div>
    </div>
  );
};

export default PatientViewPrescription;