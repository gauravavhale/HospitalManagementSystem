import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // If not logged In
    if(!user){
        return <Navigate to="/" replace />;
    }

    // Role mismatch → redirect to their own dashboard
    if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} replace />;
    }

    return <Outlet/>;
}

export default ProtectedRoutes;