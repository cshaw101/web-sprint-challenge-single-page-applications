import React from "react";
import { Routes, Route, Link} from 'react-router-dom'
import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";



const App = () => {
  return (
    <div className="appWrapper">
    <h1>Bloomtech Eats</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp; 
        <Link to="pizza">Order</Link>&nbsp;
        <Link to="confirmation">Confirmation</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pizza" element={<Order />} />
        <Route path="Confirmation" element={<Confirmation />} />
      </Routes>

      


    </div>



  );
};
export default App;



/**
 * add in a json file to store names of pizzas and price to add to the homepage
 * 
 */