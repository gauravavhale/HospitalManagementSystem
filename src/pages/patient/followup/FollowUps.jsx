import React from "react";
import { useNavigate } from "react-router-dom";
import { followUpsData } from "../../../data/followupsDummyData";

const FollowUps = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold text-[#536CB3] mb-6">
        Follow -Ups
      </h2>

      <p className="text-sm mb-2">
        <span className="font-semibold">Date</span> 1 Jan 2026 - 21 Jan 2026
      </p>
      <p className="text-sm mb-4">Quick Filter <span className="font-semibold">Next 7 Days</span></p>

      {/* Table Header */}
      <div className="grid grid-cols-3 bg-gray-200 p-3 font-semibold text-sm border">
        <div>Doctor Name</div>
        <div>Follow Up date</div>
        <div>Visit Type</div>
      </div>

      {/* Rows */}
      {followUpsData.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-3 p-4 bg-white border border-t-0 text-sm items-center"
        >
          <div>
            <p className="font-semibold">{item.doctorName}</p>
            <p>{item.specialization}</p>
            <p>{item.contact}</p>
          </div>

          <div>
            <p>{item.date}</p>
            <p>{item.time}</p>
            <p>{item.date}</p>
          </div>

          <div>
            <button
              onClick={() => navigate(`/patient/followups/${item.id}`)}
              className="text-blue-600 font-semibold"
            >
              View Details
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Buttons */}
      <div className="flex gap-6 mt-8">
        <button className="bg-[#536CB3] text-white px-8 py-2 rounded">
          Generate PDF
        </button>
        <button className="bg-green-600 text-white px-8 py-2 rounded">
          Send via Whatsapp
        </button>
        <button className="bg-red-200 px-8 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FollowUps;