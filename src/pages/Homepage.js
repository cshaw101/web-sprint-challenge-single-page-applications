import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

const navigate = useNavigate();

const toOrder= () => {
    // 👇️ navigate to /
    navigate('/pizza');
  };

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={toOrder} id="order-pizza">Order Pizza</button>
        </div>
    )
}


export default Homepage;