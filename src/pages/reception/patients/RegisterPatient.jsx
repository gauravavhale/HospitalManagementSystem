import { useNavigate } from "react-router-dom";
import { FaMobileScreenButton } from "react-icons/fa6";

const RegisterPatient = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">

      <div className="w-full max-w-4xl">

        {/* Top Right Back Link */}
        <div className="flex justify-end">
          <button
            onClick={() =>
              navigate(`/${user.role.toLowerCase()}/dashboard`)
            }
            className="text-[#536CB3] text-sm font-medium hover:underline"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
          Patient Registration
        </h2>

        {/* Search Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Search Patient by Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
          />

          <div className="flex justify-start gap-2 items-center mt-4 border-2 border-none bg-blue-50 p-2 text-[#536CB3] text-sm rounded-sm">
            <FaMobileScreenButton size={25}/> 
            <p>Search existing Patient details by mobile Number.<br />
              All fields will auto - fill if patient exists.</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Patient Name"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Patient Age/Gender <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Patient Age/Gender"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Patient Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Patient Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Patient Weight<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Weight in Kg"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-sm">
              Enter BP Reading<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter BP Reading"
              className="flex-1 border border-[#536CB3] px-4 py-2 rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">

          <button className="bg-[#536CB3] text-white px-8 py-2 rounded-sm hover:bg-blue-800">
            Save/Proceed to Appointment
          </button>

          <button className="border border-[#536CB3] text-[#536CB3] px-10 py-2 rounded-sm hover:bg-blue-50">
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
};

export default RegisterPatient;
