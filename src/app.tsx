import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthenticatedLayout from './components/AuthenticatedLayout/AuthenticatedLayout';
import { useAuth } from './contexts/authContext';
import Login from './pages/login';
import Home from './pages/home';
import Events from './pages/events';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {}, [isAuthenticated]);

  const authenticatedRoutes = () => {
    return (
      <AuthenticatedLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AuthenticatedLayout>
    );
  };
  const nonauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  };

  return <Router>{!isAuthenticated ? nonauthenticatedRoutes() : authenticatedRoutes()}</Router>;
};

export default App;
