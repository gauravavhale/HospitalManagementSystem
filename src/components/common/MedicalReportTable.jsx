import React from "react";

const MedicalReportTable = ({ reports }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold border-b pb-2 text-gray-700">
        <div>Patient Name</div>
        <div>Report Type</div>
        <div>Date Issued</div>
        <div className="text-center">Action</div>
      </div>

      {/* Table Rows */}
      {reports.map((report) => (
        <div
          key={report.id}
          className="grid grid-cols-4 items-center border-b py-4 text-sm"
        >
          <div>
            <p className="font-medium">{report.patientName}</p>
            <p className="text-gray-500 text-xs">{report.patientId}</p>
          </div>

          <div>{report.reportType}</div>

          <div>{report.dateIssued}</div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
              View Report
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalReportTable;