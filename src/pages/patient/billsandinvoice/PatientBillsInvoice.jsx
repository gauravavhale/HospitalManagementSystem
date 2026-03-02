import React from "react";

const PatientBillsInvoice = () => {
  // Dummy Data
  const patientInfo = {
    name: "Rahul Mehta",
    age: 30,
    gender: "Male",
    patientId: "PT123455",
    contact: "2736901267",
    visitType: "OPD - 12 Jan 2026",
  };

  const billingItems = [
    { id: 1, service: "Doctor Consultation", qty: 1, price: 500 },
    { id: 2, service: "Doctor Consultation", qty: 1, price: 500 },
    { id: 3, service: "Doctor Consultation", qty: 1, price: 500 },
    { id: 4, service: "Doctor Consultation", qty: 1, price: 500 },
    { id: 5, service: "Doctor Consultation", qty: 1, price: 500 },
  ];

  const grandTotal = billingItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Page Title */}
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Bills & Invoice
      </h2>

      {/* Patient Information */}
      <div className="bg-white p-6 rounded shadow-sm border mb-8">
        <h3 className="text-lg font-semibold text-[#536CB3] mb-4">
          Patient Information
        </h3>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p>
              <span className="font-semibold">Patient Name:</span>{" "}
              {patientInfo.name}
            </p>
            <p>
              <span className="font-semibold">Age/Gender:</span>{" "}
              {patientInfo.age}/{patientInfo.gender}
            </p>
            <p>
              <span className="font-semibold">Patient ID:</span>{" "}
              {patientInfo.patientId}
            </p>
          </div>

          <div>
            <p>
              <span className="font-semibold">Patient Name:</span>{" "}
              {patientInfo.name}
            </p>
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              {patientInfo.contact}
            </p>
            <p>
              <span className="font-semibold">Visit Type:</span>{" "}
              {patientInfo.visitType}
            </p>
          </div>
        </div>
      </div>

      {/* Billing Details */}
      <div className="bg-white p-6 rounded shadow-sm border">
        <h3 className="text-lg font-semibold text-[#536CB3] mb-4">
          Billing Details
        </h3>

        {/* Table Header */}
        <div className="grid grid-cols-5 bg-gray-100 p-3 font-semibold text-sm border">
          <div>#</div>
          <div>Service / Item</div>
          <div>Qty</div>
          <div>Unit Price</div>
          <div>Total</div>
        </div>

        {/* Table Rows */}
        {billingItems.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-5 p-3 text-sm border border-t-0"
          >
            <div>{index + 1}</div>
            <div>{item.service}</div>
            <div>{item.qty}</div>
            <div>₹ {item.price}</div>
            <div>₹ {item.qty * item.price}</div>
          </div>
        ))}

        {/* Grand Total */}
        <div className="flex justify-end mt-6">
          <p className="font-semibold text-md">
            Grand Total ₹ {grandTotal}
          </p>
        </div>

        {/* Payment Status */}
        <div className="mt-6 text-sm space-y-1">
          <p>
            <span className="font-semibold">Payment Status:</span> Paid via
            Credit Card
          </p>
          <p>
            <span className="font-semibold">Payment Status:</span>{" "}
            <span className="text-green-600 font-semibold">Paid</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <button className="bg-[#536CB3] text-white px-8 py-2 rounded shadow hover:opacity-90">
            Generate PDF
          </button>

          <button className="bg-green-600 text-white px-8 py-2 rounded shadow hover:opacity-90">
            Send via Whatsapp
          </button>

          <button className="bg-red-200 text-gray-800 px-8 py-2 rounded shadow hover:opacity-90">
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientBillsInvoice;