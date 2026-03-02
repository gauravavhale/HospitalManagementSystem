import { useNavigate } from "react-router-dom";

const DoctorConsultation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-[#536CB3] mb-8">
          Doctor Consultation Screen
        </h2>

        <div className="grid grid-cols-2 gap-16">

          {/* ================= LEFT COLUMN ================= */}
          <div>

            {/* Patient Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="patient"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">Rahul Mehta</h3>
                <div className="flex gap-3 text-xs mt-2">
                  <span className="border px-2 py-1">Age 30</span>
                  <span className="border px-2 py-1">Male</span>
                  <span className="border px-2 py-1">3725269851</span>
                </div>
              </div>
            </div>

            {/* Patient Details */}
            <h4 className="text-[#536CB3] font-semibold mb-3">
              Patient Details
            </h4>

            <div className="grid grid-cols-2 gap-6 text-sm mb-6">
              <div>
                <p><strong>Weight:</strong> 67 Kg</p>
                <p className="mt-2"><strong>Temperature:</strong> 98F</p>
              </div>

              <div>
                <p><strong>Dia:</strong> 84 mmHg</p>
                <p className="mt-2"><strong>Pulse:</strong> 78bpm</p>
              </div>
            </div>

            {/* Chief Complaint */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Chief Complaint
            </h4>
            <p className="text-sm mb-6">Cough, Fever</p>

            {/* Consultation Date */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Consultation Date
            </h4>
            <input
              type="text"
              value="16 Jan 2026"
              readOnly
              className="border p-2 w-full mb-6"
            />

            {/* Status */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Status
            </h4>
            <input
              type="text"
              value="Completed"
              readOnly
              className="border p-2 w-full"
            />
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div>

            {/* Consultation Date */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Consultation Date
            </h4>
            <input
              type="text"
              value="16 Jan 2026"
              readOnly
              className="border p-2 w-full mb-6"
            />

            {/* Fee */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Visiting / Consultation Fee
            </h4>
            <input
              type="text"
              defaultValue="₹ 6000"
              className="border p-2 w-full mb-6"
            />

            {/* Symptoms */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Symptoms & Findings
            </h4>

            <div className="border p-4 mb-6 text-sm space-y-3">
              <div className="flex gap-6">
                <label><input type="checkbox" defaultChecked /> Headache</label>
                <label><input type="checkbox" /> Cough</label>
                <label><input type="checkbox" /> fever</label>
              </div>

              <div className="flex gap-6">
                <label><input type="checkbox" /> Back Pain</label>
                <label><input type="checkbox" defaultChecked /> Hypertension</label>
                <label><input type="checkbox" defaultChecked /> Chest Pain</label>
              </div>
            </div>

            {/* Notes */}
            <h4 className="text-[#536CB3] font-semibold mb-2">
              Notes
            </h4>

            <textarea
              rows="4"
              className="border p-3 w-full mb-2"
              defaultValue={`Patient- reported frequent headaches and dizziness
                            Blood pressure is elevated at 126/64 mmHg`}
            />

            <p className="text-xs text-gray-500 mb-6">
              On Save, Consultation will be marked as completed
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="border px-8 py-2 w-40"
              >
                Cancel
              </button>

              <button className="bg-[#536CB3] text-white px-8 py-2 w-56">
                Save Consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultation;
