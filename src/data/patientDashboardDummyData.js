export const patientDashboardData = {
  summary: {
    totalAppointments: 2,
    totalPrescriptions: 5,
    totalBills: 1,
    prescriptionAmount: 3200,
  },

  upcomingAppointments: [
    {
      id: 1,
      date: "15 Jan 2026",
      doctor: "Dr. Mehta",
      time: "11:00 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "15 Jan 2026",
      doctor: "Dr. Mehta",
      time: "11:00 AM",
      status: "Upcoming",
    },
  ],

  confirmedAppointments: [
    {
      id: 3,
      date: "15 Jan 2026",
      doctor: "Dr. Mehta",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ],

  recentPrescriptions: [
    {
      id: 1,
      date: "15 Jan 2026",
      doctor: "Dr. Mehta",
    },
    {
      id: 2,
      date: "15 Jan 2026",
      doctor: "Dr. Mehta",
    },
  ],

  latestVitals: {
    bp: "120/80 mmHg",
    weight: "75 Kg",
    pulse: "80 bpm",
  },
};