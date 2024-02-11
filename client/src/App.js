// App.js
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
import Admin from './Components/AdminPages/Admin';
import DabbawalaPage from './Components/DabbawalaPages/DabbawalaPage';
import { AdminAccess, DabbawalaAccess, CustomerAccess } from './RouteProtection';


function App() {
  const auth = useAuth();
  const user = auth.user;

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerAccess><Home /></CustomerAccess>} />
          <Route path="/Orders" element={<CustomerAccess><Orders /></CustomerAccess>} />
          <Route path="/DabbawalaCommunity" element={<CustomerAccess><DabbawalaCommunity /></CustomerAccess>} />
          <Route path="/Dabbawalas" element={<CustomerAccess><Dabbawalas /></CustomerAccess>} />
          <Route path="/DeliveryTracking" element={<CustomerAccess><DeliveryTracking/></CustomerAccess>} />





          <Route path="/admin" element={<AdminAccess><Admin /></AdminAccess>} />
          <Route path="/DPage" element={<DabbawalaAccess><DabbawalaPage /></DabbawalaAccess>} />
        </Routes>
        <h2>{user && user.role}</h2>
      </div>
    </Router>
  );
}

export default App;
