export const rolesList = [
  { id: 1, name: "Admin", info: "Full Access Read only medical", activeUsers: 1 },
  { id: 2, name: "Doctor", activeUsers: 1 },
  { id: 3, name: "Reception Staff", activeUsers: 21 },
];

export const usersList = [
  { id: 1, name: "Amy Swift", status: "Active" },
  { id: 2, name: "Brian Clark", status: "Active" },
  { id: 3, name: "Mary Sharma", status: "Active" },
];

export const permissionMatrix = [
  { module: "Dashboard", special: "Activate / Deactivate" },
  { module: "Doctor Management", special: "Checked-in" },
  { module: "Patient Registration", special: "Cancel" },
  { module: "Appointments", special: "Activate / Deactivate" },
  { module: "Consultation", special: "Print" },
  { module: "Billing", special: "Activate / Deactivate" },
];

export const auditLogs = [
  {
    date: "15 Jan 2026",
    action: "Reception Staff",
    role: "Reception Staff",
    assignedDate: "15 Jan 2026",
    status: "Active",
  },
  {
    date: "15 Jan 2026",
    action: "Reception Staff",
    role: "Reception Staff",
    assignedDate: "15 Jan 2026",
    status: "Active",
  },
  {
    date: "15 Jan 2026",
    action: "Reception Staff",
    role: "Reception Staff",
    assignedDate: "15 Jan 2026",
    status: "Active",
  },
];