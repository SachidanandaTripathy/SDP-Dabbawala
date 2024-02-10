import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';

import Orders from './Components/Orders';
import DabbawalaCommunity from './Components/DabbawalaCommunity';
import Dabbawalas from './Components/Dabbawalas';
import DeliveryTracking from './Components/DeliveryTracking';
import Home from './Components/Home';
import { useAuth } from './AuthProvider';

function App() {
  const auth = useAuth();
  const user = auth.user;

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/DabbawalaCommunity" element={<DabbawalaCommunity />} />
          <Route path="/Dabbawalas" element={<Dabbawalas />} />
          <Route path="/DeliveryTracking" element={<DeliveryTracking />} />
        </Routes>
        <h2>{user && user.contactNumber}</h2>
      </div>
    </Router>
  );
}

export default App;
