import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { patientAppointments } from "../../../data/patientAppointmentsDummy";

const AppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const appointment = patientAppointments.find(
    (appt) => appt.id === id
  );

  if (!appointment) return <p>No appointment found</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold text-[#536CB3]">
        Appointments Details
      </h1>

      <p className="text-blue-600 mb-6">
        Appointment ID: {appointment.id}
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Patient Info */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold mb-2">
            Patient Information
          </h3>
          <p className="font-medium">{appointment.patient.name}</p>
          <p>Age {appointment.patient.age}</p>
          <p>{appointment.patient.gender}</p>
          <p>{appointment.patient.phone}</p>
        </div>

        {/* Doctor Info */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold mb-2">
            Doctor Information
          </h3>
          <p className="font-medium">{appointment.doctor}</p>
          <p>{appointment.specialization}</p>
          <p>Consultation: {appointment.date}</p>
        </div>
      </div>

      {/* Appointment Info */}
      <div className="bg-white p-4 rounded shadow-sm mb-6">
        <h3 className="font-semibold mb-2">
          Appointment Information
        </h3>
        <p className="font-medium">
          {appointment.patient.name}
        </p>
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Reason For: {appointment.reason}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          View Prescription
        </button>

        <button
          onClick={() =>
            navigate("/patient/bill-details/1")
          }
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          View Bill
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;