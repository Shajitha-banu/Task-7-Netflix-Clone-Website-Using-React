import React, { useState } from 'react';
import NetflixClone from './pages/NetflixClone';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <NetflixClone />
  ) : (
    <Login onLogin={handleLoginSuccess} />
  );
}

export default App;
