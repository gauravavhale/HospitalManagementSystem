import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Top Right Back Link */}
        <div className="flex justify-end">
          <button
            onClick={() =>
              navigate(`/${user.role.toLowerCase()}/dashboard`)
            }
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>

        {/* ================= Book Appointment ================= */}
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#536CB3" }}
        >
          Book Appointment
        </h2>

        <p className="text-sm font-medium mb-4">Patient Details</p>

        <div className="space-y-4 mb-8">

          <div className="flex items-center">
            <label className="w-64 text-sm">Patient Mobile Number</label>
            <input
              type="text"
              defaultValue="4592027219"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">Patient Name</label>
            <input
              type="text"
              defaultValue="Ritu Kumari"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">Patient Age</label>
            <input
              type="text"
              defaultValue="45"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">Patient Address</label>
            <input
              type="text"
              defaultValue="Flat No 12, Shanti Nagar, Near City Hospital, Vasai West, Palghar - 401202"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <p className="text-sm">
            New Patient?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Register Patient
            </span>
          </p>

        </div>

        {/* ================= Doctor & Slot ================= */}

        <div className="flex justify-between items-center">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#536CB3" }}
          >
            Doctor & Appointment Slot
          </h2>

          <button
            onClick={() =>
              navigate(`/${user.role.toLowerCase()}/dashboard`)
            }
            className="text-sm text-blue-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>

        <p className="text-sm font-medium mb-4">Patient Details</p>

        <div className="space-y-4">

          <div className="flex items-center">
            <label className="w-64 text-sm">Doctor</label>
            <input
              type="text"
              defaultValue="Dr. Anita Sharma"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <p className="text-sm text-blue-600 pl-64">
            ▾ Specialization: Cardiologist
          </p>

          <div className="flex items-center">
            <label className="w-64 text-sm">select Date</label>
            <input
              type="text"
              defaultValue="25 Jan 2026"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">Consultation Fees:</label>
            <input
              type="text"
              defaultValue="₹500"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

          {/* Time Slots */}
          <div className="pl-64 flex gap-4 mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-sm text-sm">
              10:00AM
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-sm text-sm">
              10:40AM
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-sm text-sm">
              11:00AM
            </button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-sm text-sm cursor-not-allowed">
              12:00PM
              <div className="text-xs">Booked</div>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-sm text-sm">
              1:00PM
            </button>
          </div>

          {/* Reason */}
          <div className="flex items-center mt-4">
            <label className="w-64 text-sm">Reason for Visit</label>
            <input
              type="text"
              placeholder="Enter Reason For Visit......."
              className="flex-1 border border-gray-300 px-4 py-2 rounded-sm"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10 mb-10">
          <button
            className="text-white px-10 py-2 rounded-sm"
            style={{ backgroundColor: "#536CB3" }}
          >
            Book Appointment
          </button>

          <button className="border border-[#536CB3] text-[#536CB3] px-10 py-2 rounded-sm hover:bg-blue-50">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookAppointment;
