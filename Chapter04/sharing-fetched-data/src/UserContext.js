import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

function fetchUser() {
  console.count('fetching user');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Adam' });
    }, 1000);
  });
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '...' });

  useEffect(() => {
    fetchUser().then(user => {
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
