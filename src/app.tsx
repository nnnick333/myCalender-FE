import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import { useAuth } from './contexts/authContext';
import { TimeFrameContextProvider } from './contexts/TimeFrameContext';
import Login from './pages/login';
import Home from './pages/home';
import Events from './pages/events';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {}, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated && <NavBar />}
      {!isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <TimeFrameContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </TimeFrameContextProvider>
      )}
    </Router>
  );
};

export default App;
