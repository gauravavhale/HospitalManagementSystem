import { useParams, useNavigate } from "react-router-dom";
import medicalReports from "../../../data/medicalReportsDummy";

const ViewReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const report = medicalReports.find((item) => item.id === id);

  if (!report) {
    return <div className="p-6">Report not found</div>;
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-xl font-semibold text-blue-700 mb-6">
        View Reports
      </h2>

      <div className="bg-white p-6 border">
        {/* Hospital Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-700">
            HOSPITAL MANAGEMENT SYSTEM
          </h3>
          <p className="text-sm mt-2">
            City Hospital 123, ABC Road, Andheri <br />
            West, Mumbai - 400058 Maharashtra, India
          </p>
          <p className="text-sm mt-2">
            📞 Phone: +91 98765 43210 <br />
            📧 Email: info@cityhospital.com
          </p>
        </div>

        {/* Patient Info */}
        <div className="border p-4 mb-6">
          <h4 className="font-semibold mb-2">Patient Information</h4>
          <p className="font-medium">{report.patientName}</p>
          <p>Age {report.age}</p>
          <p>{report.gender}</p>
          <p>{report.patientId}</p>
          <p>Report date: {report.reportDate}</p>
        </div>

        {/* Blood Test Table */}
        <h4 className="font-semibold mb-2">Blood Test</h4>

        <div className="border">
          <div className="grid grid-cols-3 bg-gray-200 p-2 text-sm font-semibold">
            <div>Test Name</div>
            <div>Result</div>
            <div>Normal Range</div>
          </div>

          {report.tests?.map((test, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-2 text-sm border-t"
            >
              <div>{test.name}</div>
              <div>{test.result}</div>
              <div>{test.normal}</div>
            </div>
          ))}
        </div>

        {/* Doctor Info */}
        <div className="mt-8 text-sm">
          <p className="font-semibold">Doctor Information</p>
          <p>Dr. Mehta</p>
          <p>MD (Pathology)</p>
          <p>+76897690103</p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-700 text-white px-6 py-2 text-sm">
            Generate PDF
          </button>
          <button className="bg-green-600 text-white px-6 py-2 text-sm">
            Send via Whatsapp
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-200 text-black px-6 py-2 text-sm"
          >
            Back to report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;