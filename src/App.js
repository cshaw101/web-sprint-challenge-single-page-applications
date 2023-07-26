import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";


const App = () => {
  return (
    <BrowserRouter>
    <h1>Bloomtech Eats</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp; 
        <Link to="order">Order</Link>&nbsp;
        
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="order" element={<Order />} />
        <Route path="Confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
