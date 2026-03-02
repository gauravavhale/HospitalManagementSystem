import { NavLink } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUserPlus, FaCreditCard,FaCalendar,FaUser  } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaStethoscope,FaRepeat,FaUserDoctor} from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { PiLockKeyBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";

export default function Sidebar({ role }) {
  // Role-based navigation items
  const navItems = {
    RECEPTION: [
      { name: "Dashboard", path: "/reception/dashboard", icon: TbLayoutDashboardFilled },
      { name: "Patient Registration", path: "/reception/patients/RegisterPatient", icon: FaUserPlus },
      { name: "Appointment Booking", path: "/reception/appointments/BookAppointment", icon: FaCalendar },
      { name: "Billing", path: "/reception/Dummy", icon: FaCreditCard },
    ],
    PATIENT: [
      { name: "Dashboard", path: "/patient/dashboard", icon: TbLayoutDashboardFilled },
      { name: "Appointments", path: "/patient/appointments", icon: BsCalendar2DateFill },
      { name: "Prescriptions", path: "/patient/prescription", icon: GiMedicines },
      { name: "Bills & Invoice", path: "/patient/bills&invoice", icon: FaUser },
      { name: "Follow-Ups", path: "/patient/followups", icon: FaRepeat },
      { name: "Medical Records", path: "/patient/reports", icon: BiSolidReport },
    ],
    ADMIN: [
      { name: "Dashboard", path: "/admin/dashboard", icon: TbLayoutDashboardFilled },
      { name: "Doctor Management", path: "/admin/doctors/doctorList", icon: FaUserDoctor },
      { name: "Billing Overview", path: "/admin/billingOverview", icon: FaCreditCard },
      { name: "Reports & Logs", path: "/admin/reports", icon: VscGraph },
      { name: "Role & Access Control", path: "/admin/role-access", icon: PiLockKeyBold },
      { name: "Hospital Settings", path: "/admin/hospital-settings", icon: IoIosSettings },
    ],
    DOCTOR: [
      { name: "Dashboard", path: "/doctor/dashboard", icon: TbLayoutDashboardFilled },
      { name: "Appointments", path: "/doctor/appointments", icon: BsCalendar2DateFill },
      { name: "Patients", path: "/doctor/patients", icon: FaUser  },
      { name: "Consultations", path: "/doctor/consultations", icon: FaStethoscope },
      { name: "Prescriptions", path: "/doctor/prescriptions/:id", icon: GiMedicines },
      { name: "Follow-Ups", path: "/doctor/followups", icon: FaRepeat },
      { name: "Medical Reports", path: "/doctor/reports", icon: BiSolidReport },
    ]
  };

  const items = navItems[role] || [];

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md transition 
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}