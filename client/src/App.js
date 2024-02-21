// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminAccess, DabbawalaAccess, CustomerAccess } from './RouteProtection';
import { useAuth } from './AuthProvider';



import Navbar from './Components/Navbar';

import Orders from './Components/Orders';
import DabbawalaCommunity from './Components/DabbawalaCommunity';
import Dabbawalas from './Components/Dabbawalas';
import DeliveryTracking from './Components/DeliveryTracking';
import Home from './Components/Home';


import DabbawalaDashBoard from './Components/DabbawalaPages/DabbawalaDashBoard';
import Profile from './Components/DabbawalaPages/Profile';
import History from './Components/DabbawalaPages/History';



import AdminDashBoard from './Components/AdminPages/AdminDashBoard';
import Request from './Components/AdminPages/Request';


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
          <Route path="/Orders" element={<CustomerAccess><Orders /></CustomerAccess>} />
          <Route path="/DabbawalaCommunity" element={<CustomerAccess><DabbawalaCommunity /></CustomerAccess>} />
          <Route path="/Dabbawalas" element={<CustomerAccess><Dabbawalas /></CustomerAccess>} />
          <Route path="/DeliveryTracking" element={<DeliveryTracking/>} />

          <Route path="/Dashboard" element={<DabbawalaAccess><DabbawalaDashBoard/></DabbawalaAccess>} />
          <Route path="/Dprofile" element={<DabbawalaAccess><Profile/></DabbawalaAccess>} />
          <Route path="/DHistory" element={<DabbawalaAccess><History/></DabbawalaAccess>} />

          <Route path="/admin" element={<AdminAccess><AdminDashBoard/></AdminAccess>} />
          <Route path="/requests" element={<AdminAccess><Request /></AdminAccess>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
