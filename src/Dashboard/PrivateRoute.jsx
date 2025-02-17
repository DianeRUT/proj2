import React from "react";
import { Navigate, Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return (
      <Navigate to="/login" replace state={{ from: window.location }} />
    );
  }

  return children;
};

export default ProtectedRoute;
