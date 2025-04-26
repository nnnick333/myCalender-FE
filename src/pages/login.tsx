import React, { useState } from 'react';

import pageIcon from '../assets/icon.png';
import api from '../api/axios';

import { setJWT, setRefreshToken } from '../lib/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api
      .post('/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        setJWT(response.data['access-token']);
        setRefreshToken(response.data['refresh-token']);
      })
      .catch((err) => console.error('Login error:', err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 grid gap-6 w-full max-w-md">
        <div className="flex justify-center">
          <img src={pageIcon} alt="Page Icon" className="w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            disabled={!email || !password}
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              email && password ? 'cursor-pointer' : 'cursor-nothing'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
