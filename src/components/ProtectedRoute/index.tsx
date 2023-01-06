import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { dashboardLoading, user } = useContext(UserContext);

  if (dashboardLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
