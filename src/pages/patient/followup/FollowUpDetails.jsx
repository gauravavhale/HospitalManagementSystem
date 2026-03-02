import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { followUpsData } from "../../../data/followupsDummyData";

const FollowUpDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const followUp = followUpsData.find((item) => item.id === Number(id));

  if (!followUp) return <div className="p-8">Follow Up Not Found</div>;

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
        follow-Up Details
      </h2>

      {/* Patient Info */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="font-semibold mb-2">Patient Information</h3>
        <p className="font-semibold">Rahul Mehta</p>
        <p>Age 30</p>
        <p>Male</p>
        <p>3725269851</p>
        <p className="text-green-600 font-semibold mt-2">
          {followUp.status}
        </p>
      </div>

      {/* Doctor Info */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="font-semibold mb-2">Doctor Information</h3>
        <p className="font-semibold">{followUp.doctorName}</p>
        <p>{followUp.specialization}</p>
        <p>{followUp.contact}</p>
      </div>

      {/* Linked Record */}
      <div className="bg-white p-6 border mb-6">
        <h3 className="font-semibold mb-4">Linked Record</h3>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Last Consultation</p>
            <p>11 Apr 2025</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-1 rounded">
            View
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Last Prescription</p>
            <p>11 Apr 2025</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-1 rounded">
            View
          </button>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-6">
        <button className="bg-[#536CB3] text-white px-8 py-2 rounded">
          Reschedule Follow-Up
        </button>
        <button
          onClick={() =>
            navigate(`/patient/followups/${id}/prescription`)
          }
          className="bg-green-600 text-white px-8 py-2 rounded"
        >
          View Prescription
        </button>
      </div>
    </div>
  );
};

export default FollowUpDetails;