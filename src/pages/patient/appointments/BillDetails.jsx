import React from "react";

const BillDetails = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Bill details
      </h1>

      {/* Hospital Header */}
      <div className="bg-white p-6 rounded shadow-sm mb-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#536CB3]">
              HOSPITAL Management System
            </h2>
            <p className="text-sm mt-2">
              City Hospital 123, ABC Road, Andheri West, Mumbai – 400058 Maharashtra, India
            </p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <p className="text-sm">Email: info@cityhospital.com</p>
          </div>

          <div className="text-sm">
            <p><strong>Invoice No:</strong> INVN-2026-00178</p>
            <p><strong>Bill Type:</strong> OPD</p>
            <p><strong>Invoice Date:</strong> 18 Jan 2026</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Patient & Doctor Info */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#536CB3]">
              Patient Information
            </h3>
            <p><strong>Rahul Mehta</strong></p>
            <p>Age 30</p>
            <p>Male</p>
            <p>+3725269851</p>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2 text-[#536CB3]">
              Doctor Information
            </h3>
            <p><strong>Dr. Mehta</strong></p>
            <p>Cardiologist</p>
            <p>Consultation: 6 Jan 2026</p>
          </div>
        </div>

        {/* Bill Table */}
        <div className="col-span-2 bg-white p-4 rounded shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Description</th>
                <th>Quantity</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Consultation fees</td>
                <td className="text-center">1</td>
                <td className="text-right">₹500</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Follow-up Charges</td>
                <td className="text-center">1</td>
                <td className="text-right">₹300</td>
              </tr>

              <tr>
                <td colSpan="2" className="text-right font-semibold pt-4">
                  Subtotal
                </td>
                <td className="text-right pt-4">₹800</td>
              </tr>

              <tr>
                <td colSpan="2" className="text-right">
                  Discount
                </td>
                <td className="text-right">₹0</td>
              </tr>

              <tr>
                <td colSpan="2" className="text-right">
                  Tax
                </td>
                <td className="text-right">₹0</td>
              </tr>

              <tr className="border-t">
                <td colSpan="2" className="text-right font-bold pt-2">
                  Grand Total
                </td>
                <td className="text-right font-bold pt-2">
                  ₹800
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Download PDF
        </button>

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Send Via WhatsApp
        </button>

        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Print Bill
        </button>

        <button className="bg-gray-300 px-6 py-2 rounded">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default BillDetails;