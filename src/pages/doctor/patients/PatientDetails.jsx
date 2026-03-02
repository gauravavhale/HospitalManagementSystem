import { useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">

      <div className="bg-white w-[750px] border rounded p-10">

        {/* 🔵 Heading */}
        <h2 className="text-2xl font-semibold text-[#536CB3] text-center mb-8">
          Patient Appointment Details
        </h2>

        <div className="flex gap-8">

          {/* Left Profile Image */}
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="patient"
              className="w-24 h-24 rounded-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">

            {/* Name + Tags */}
            <h3 className="text-lg font-semibold mb-3">
              Rahul Mehta
            </h3>

            <div className="flex gap-3 text-xs mb-6">
              <span className="border px-3 py-1">Age 30</span>
              <span className="border px-3 py-1">Male</span>
              <span className="border px-3 py-1">3725269851</span>
            </div>

            {/* Appointment Info */}
            <h4 className="text-[#536CB3] font-semibold mb-3">
              Appointment Info
            </h4>

            <div className="text-sm space-y-2 mb-6">
              <p>
                <strong>Appointment Date:</strong> Jan 6, 2026 &nbsp;&nbsp; 09:00AM
              </p>
              <p>
                <strong>Doctor Name:</strong> Dr. Sarah Wilson
              </p>
              <p>
                <strong>Reason For Visit:</strong> Hypertension
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-medium">
                  Upcoming
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => navigate("/doctor/consultation/1")}
                className="bg-[#536CB3] text-white px-6 py-2 rounded w-48"
              >
                Start Consultation
              </button>

              <button className="bg-red-300 text-black px-6 py-2 rounded w-48">
                Cancel Appointments
              </button>
            </div>

            {/* Back Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/doctor/patients")}
                className="border px-8 py-2 rounded bg-gray-100"
              >
                Back to Dashboard
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default PatientDetails;
