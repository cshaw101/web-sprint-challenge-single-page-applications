import React from "react";
import { ReactDOM } from "react-dom";


const Order = () => {

  return (
    <div className="formContainer">
    <form id="pizza-form">
      <label>Enter Name:
        <input type="text" id="name-input"/>
      </label>
      <label>
        Pizza Size:
          <select id="size-dropdown">

          <option value="option">--Select Option--</option>

          <option value="small">10"</option>

          <option value="medium">12"</option>

          <option value="large">16"</option>

        </select>
      </label>
    <div>
      <label>
        Pepperoni
      <input type="checkbox" id="pepperoni" />
      </label>
      <label>
        Sausage
      <input type="checkbox" id="sausage" />
      </label>
      <label>
        Pineapple
      <input type="checkbox" id="pineapple"/>
      </label>
      <label>
        Mushrooms
      <input type="checkbox" id="mushrooms" />
      </label>
      <label>
        Bacon
      <input type="checkbox" id="bacon" />
      </label>
      <label>
        Extra Cheese
      <input type="checkbox" id="extra-cheese"/>
      </label>
      <label>
        Green Peppers
      <input type="checkbox" id="green-peppers" />
      </label>
      <label>
        Banana Peppers
      <input type="checkbox" id="banana-peppers" />
      </label>

    </div>

    <label>
      Special Instructions:
      <input type="text" id="special-text" />
    </label>
      <button>Add to Order</button>
    </form>
    </div>
  )

};



export default Order;