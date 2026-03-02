import React from "react";
import { AiFillFileText } from "react-icons/ai";

const ReportCard = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border p-6 text-center cursor-pointer hover:shadow-md transition"
    >
      <AiFillFileText className="mx-auto text-[#536CB3]" size={40} />
      <h3 className="mt-4 font-medium text-[#536CB3]">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
};

export default ReportCard;
