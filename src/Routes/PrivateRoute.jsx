import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {

      
 const location=useLocation();
 console.log('private route ',location.pathname)
  const { user } = useContext(AuthContext);

  // Check if the user exists
  if (!user) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" state={location.pathname} />;
  }

  // Render children if user is authenticated
  return children;
};

export default PrivateRoute;
