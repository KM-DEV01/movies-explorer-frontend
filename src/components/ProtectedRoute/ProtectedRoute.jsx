import React, { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouteElement({ ...props }) {
  return (
    props.loggedIn ? <Outlet /> : <Navigate to="/" replace />
  );
}

export default ProtectedRouteElement;
