import React, { useEffect, useState } from "react";
import MedicalReportTable from "../../../components/common/MedicalReportTable";
import { medicalReportsDummyData } from "../../../data/medicalReportsDummyData";

const MedicalReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // using dummy data
    setReports(medicalReportsDummyData);

    // When API is ready replace above with:
    // fetchReports();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[#536CB3] mb-4">
        Medical Report
      </h1>

      {/* Date & Filter Section */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Date</span> : 1 Jan 2026 - 21 Jan 2026
        </p>

        <p className="text-sm mt-2">
          <span className="font-medium">Quick Filter</span>{" "}
          <span className="text-[#536CB3] cursor-pointer">
            Next 7 Days
          </span>
        </p>
      </div>

      {/* Table */}
      <MedicalReportTable reports={reports} />

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-[#4B5EAA] text-white px-6 py-2 rounded">
          Generate PDF
        </button>
        
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Send via Whatsapp
        </button>

        <button className="bg-red-200 text-gray-700 px-6 py-2 rounded">
          Cancel
        </button>
      </div>

    </div>
  );
};

export default MedicalReports;