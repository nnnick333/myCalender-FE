import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

const apiUrl = import.meta.env.VITE_BE_API_URL;

fetch(`${apiUrl}/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'nicholaspu3@gmail.cm',
    password: 'password',
  }),
})
  .then(async (response) => {
    const body = await response.json();
    if (!response.ok) {
      throw body;
    }
    return body;
  })
  .then((data) => console.log(data))
  .catch((err) => console.error('Login error:', err));

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
