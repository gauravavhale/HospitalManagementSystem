export const consultations = [
  {
    id: "1",
    patientName: "Rohan Smith",
    age: 30,
    gender: "Male",
    phone: "3725269851",
    consultationDate: "6 Jan 2026",
    doctor: "Dr. Anil Patil",
    diagnosis: "Fever",
    status: "Completed",
    patientId: "PT10027",
    appointmentId: "APS87690",
    checkInTime: "10:15AM",
    vitals: {
      weight: "67 Kg",
      bp: "84 mmHg",
      temperature: "98F",
      pulse: "78 bpm"
    },
    notes: "Patient advised to monitor blood sugar regularly",
    prescription: [
      {
        sr: 1,
        medicine: "Morphine 5 mg",
        qty: 1,
        frequency: "Once Daily",
        days: 30,
        startDate: "1/1/2026",
        endDate: "16/1/2026",
        instruction: "After lunch"
      }
    ],
    followUp: {
      doctor: "Dr. Mehta",
      date: "17 Jan 2026",
      time: "11:00AM"
    }
  }
];