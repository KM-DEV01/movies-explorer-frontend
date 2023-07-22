import React, { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouteElement({ loggedIn }) {
  return (
    loggedIn ? <Outlet /> : <Navigate to="/" replace />
  );
}

export default ProtectedRouteElement;
