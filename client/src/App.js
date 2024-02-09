import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';

import Orders from './Components/Orders';
import DabbawalaCommunity from './Components/DabbawalaCommunity';
import Dabbawalas from './Components/Dabbawalas';
import DeliveryTracking from './Components/DeliveryTracking';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          <Route path='/DabbawalaCommunity' element={<DabbawalaCommunity/>}/>
          <Route path='/Dabbawalas' element={<Dabbawalas/>}/>
          <Route path='/DeliveryTracking' element={<DeliveryTracking/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
