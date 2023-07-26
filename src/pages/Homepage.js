import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

const navigate = useNavigate();

const toOrder= () => {
    // 👇️ navigate to /
    navigate('/order');
  };

    return (
        <div>
            <button onClick={toOrder} className="order-pizza">Order Pizza</button>
        </div>
    )
}


export default Homepage;