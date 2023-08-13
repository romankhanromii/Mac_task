import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import CustomerReservation from './CustomerReservation';

const App = () => {
  const [activeTab, setActiveTab] = useState('Login');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleLogin = (userToken) => {
    setToken(userToken);
    localStorage.setItem('token', userToken); // Store the token in local storage
    setActiveTab('CustomerReservation');
  };

  return (
    <div className="app">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'Login' ? 'active' : ''}`}
          onClick={() => handleTabClick('Login')}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeTab === 'CustomerReservation' ? 'active' : ''}`}
          onClick={() => handleTabClick('CustomerReservation')}
        >
          Create Customer & Reservation
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Login' && <Login onLogin={handleLogin} />}
        {activeTab === 'CustomerReservation' && <CustomerReservation token={token} />}
      </div>
    </div>
  );
};

export default App;
