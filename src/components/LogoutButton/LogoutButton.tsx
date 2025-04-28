import React from 'react';

import { useAuth } from '../../contexts/authContext';

export default function LogoutButton() {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
}
