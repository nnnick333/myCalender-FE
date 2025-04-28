import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './contexts/authContext';
import Login from './pages/login';
import Home from './pages/home';
import Events from './pages/events';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Monitor changes to isAuthenticated
  useEffect(() => {
    console.log('Authentication state changed:', isAuthenticated);
    // You can perform additional actions here if needed
  }, [isAuthenticated]); // Dependency array ensures this runs whenever isAuthenticated changes

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
