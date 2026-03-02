import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/auth/Login'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoutes from './ProtectedRoute'
import DoctorRegister from '../pages/auth/register/DoctorRegister'
import PatientRegister from '../pages/auth/register/PatientRegister'

// RECEPTION
import ReceptionDashboard from '../pages/reception/Dashboard'
import RegisterPatient from '../pages/reception/patients/RegisterPatient'
import BookAppointment from '../pages/reception/appointments/BookAppointment'
import Dummy from '../components/billing/Dummy';

// PATIENT
import PatientDashboard from '../pages/patient/PatientDashboard'
import BillDetails from '../pages/patient/appointments/BillDetails'
import PatientAppointments from '../pages/patient/appointments/PatientAppointments'
import AppointmentDetails from '../pages/patient/appointments/AppointmentDetails'
import Prescriptions from '../pages/patient/prescriptions/Prescriptions'
import PatientBillsInvoice from '../pages/patient/billsandinvoice/PatientBillsInvoice'
import FollowUps from '../pages/patient/followup/FollowUps'
import FollowUpDetails from '../pages/patient/followup/FollowUpDetails'
import PatientViewPrescription from '../pages/patient/followup/ViewPrescription'
import PatientMedicalReports from '../pages/patient/reports/MedicalReports'
import ViewReport from '../pages/patient/reports/ViewReport'

// ADMIN
import AdminDashboard from '../pages/admin/Dashboard'
import DoctorList from '../pages/admin/doctors/DoctorList'
import BillingOverview from '../pages/admin/billing/page'
import ReportsAndLogs from '../pages/admin/reports/ReportsAndLogs'
import DailyOPDReport from '../pages/admin/reports/DailyOPDReport'
import MonthlyBillingReport from '../pages/admin/reports/MonthlyBillingReport'
import DoctorConsultationReport from '../pages/admin/reports/DoctorConsultationReport'
import RoleAccessControl from '../pages/admin/roleandaccess/RoleAccessControl'
import HospitalSettings from '../pages/admin/settings/HospitalSettings'

// DOCTOR
import DoctorDashboard from '../pages/doctor/Dashboard'
import DoctorAppointments from '../pages/doctor/appointments/DoctorAppointments'
import Patients from '../pages/doctor/patients/Patients'
import PatientDetails from '../pages/doctor/patients/PatientDetails'
import DoctorConsultation from '../pages/doctor/patients/DoctorConsultation'
import Consultations from '../pages/doctor/consultation/Consultations'
import ViewConsultation from '../pages/doctor/consultation/ViewConsultation'
import ViewPrescription from '../pages/doctor/prescription/ViewPrescription'
import DoctorFollowUps from '../pages/doctor/followup/FollowUps'
import MedicalReports from '../pages/doctor/reports/MedicalReports'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register/doctor' element={<DoctorRegister/>}/>
        <Route path='/register/patient' element={<PatientRegister/>}/>

        <Route element={<DashboardLayout />}>

            {/* Reception */}
            <Route element={<ProtectedRoutes allowedRoles={["RECEPTION"]} />}>
                <Route path="/reception/dashboard" element={<ReceptionDashboard />} />
                <Route path="/reception/patients/RegisterPatient" element={<RegisterPatient />} />
                <Route path="/reception/appointments/BookAppointment" element={<BookAppointment />} />
                {/* Dummy Path / change the path && component  */}
                <Route path="Dummy" element={<Dummy />} />  
            </Route>

            {/* Patient */}
            <Route element={<ProtectedRoutes allowedRoles={["PATIENT"]} />}>
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient/bill-details/:id" element={<BillDetails />} />
                <Route path="/patient/appointments" element={<PatientAppointments />} />
                <Route path="/patient/appointment-details/:id" element={<AppointmentDetails />} />
                <Route path="/patient/prescription" element={<Prescriptions />} />
                <Route path="/patient/bills&invoice" element={<PatientBillsInvoice />} />
                <Route path="/patient/followups" element={<FollowUps />} />
                <Route path="/patient/followups/:id" element={<FollowUpDetails />} />
                <Route path="/patient/followups/:id/prescription" element={<PatientViewPrescription />} />
                <Route path="/patient/reports" element={<PatientMedicalReports />} />
                <Route path="/patient/reports/:id" element={<ViewReport />} />
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoutes allowedRoles={["ADMIN"]} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/doctors/doctorList" element={<DoctorList />} />
                <Route path="/admin/billingOverview" element={<BillingOverview />} />
                <Route path="/admin/reports" element={<ReportsAndLogs />} />
                <Route path="/admin/reports/daily-opd" element={<DailyOPDReport />} />
                <Route path="/admin/reports/monthly-billing" element={<MonthlyBillingReport />} />
                <Route path="/admin/reports/doctor-consultation" element={<DoctorConsultationReport />} />
                <Route path="/admin/role-access" element={<RoleAccessControl />} />
                <Route path="/admin/hospital-settings" element={<HospitalSettings />} />
            </Route>

            {/* Doctor */}
            <Route element={<ProtectedRoutes allowedRoles={["DOCTOR"]} />}>
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/appointments" element={< DoctorAppointments/>} />
                <Route path="/doctor/patients" element={<Patients />} />
                <Route path="/doctor/patient/:id" element={<PatientDetails />} />
                <Route path="/doctor/consultation/:id" element={<DoctorConsultation />} />
                <Route path="/doctor/consultations" element={<Consultations />} />
                <Route path="/doctor/consultations/:id" element={<ViewConsultation />} />
                <Route path="/doctor/prescriptions/:id" element={<ViewPrescription />} />
                <Route path="/doctor/followups" element={<DoctorFollowUps />} />
                <Route path="/doctor/reports" element={<MedicalReports />} />
            </Route>

        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}

export default AppRoutes