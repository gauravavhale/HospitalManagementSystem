import { useNavigate } from "react-router-dom";
import medicalReports from "../../../data/medicalReportsDummy";

const MedicalReports = () => {
  const navigate = useNavigate();

  const handleViewReport = (id) => {
    navigate(`/patient/reports/${id}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-blue-700 mb-6">
        Medical Report
      </h1>

      <div className="mb-4 text-sm">
        <span className="font-semibold">Date</span> 1 Jan 2026 - 21 Jan 2026
      </div>

      <div className="mb-6 text-sm text-gray-600">
        Quick Filter <span className="font-semibold">Next 7 Days</span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-gray-200 p-3 font-semibold text-sm border">
        <div>Patient Name</div>
        <div>Report Type</div>
        <div>Date Issued</div>
        <div>Action</div>
      </div>

      {/* Table Rows */}
      {medicalReports.map((report) => (
        <div
          key={report.id}
          className="grid grid-cols-4 items-center bg-white p-3 border border-t-0 text-sm"
        >
          <div>
            <p className="font-medium">{report.patientName}</p>
            <p className="text-xs text-gray-500">PT10045</p>
          </div>
          <div>{report.reportType}</div>
          <div>{report.dateIssued}</div>
          <div>
            <button
              onClick={() => handleViewReport(report.id)}
              className="bg-blue-600 text-white px-4 py-1 text-xs rounded"
            >
              View Report
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-700 text-white px-6 py-2 text-sm">
          Generate PDF
        </button>
        <button className="bg-green-600 text-white px-6 py-2 text-sm">
          Send via Whatsapp
        </button>
        <button className="bg-red-200 text-black px-6 py-2 text-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MedicalReports;