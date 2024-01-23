import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Components/Orders';
import DabbawalaCommunity from './Components/DabbawalaCommunity';
import Dabbawalas from './Components/Dabbawalas';
import DeliveryTracking from './Components/DeliveryTracking';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          <Route path='/DabbawalaCommunity' element={<DabbawalaCommunity/>}/>
          <Route path='/Dabbawala' element={<Dabbawalas/>}/>
          <Route path='/DeliveryTracking' element={<DeliveryTracking/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
