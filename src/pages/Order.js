import React, { useState } from "react";
import { ReactDOM } from "react-dom";


const Order = () => {

  const [formData, setFormData] = useState({

    name: '',
    pizzaSize: 'Option',
    pepperoni: false,
    sausage: false,
    pineapple: false,
    mushrooms: false,
    bacon: false,
    extraCheese: false,
    greenPeppers: false,
    bananaPeppers: false,
    specialInstructions: '',

  })

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className="formContainer">
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>Enter Name:
        <input type="text" id="name-input" name="name" value={formData.name}  onChange={handleChange}/>
      </label>
      <br/>
      <label htmlFor="pizzaDropdown">
        Pizza Size:
          <select id="size-dropdown" name="pizzaDropdownValue" value={formData.pizzaDropdownValue}  onChange={handleChange}>

          <option value="option">--Select Option--</option>

          <option value="small">10"</option>

          <option value="medium">12"</option>

          <option value="large">16"</option>

        </select>
      </label>
    <div>
      <label>
        Pepperoni
      <input type="checkbox" id="pepperoni" name="pepperoni" checked={formData.pepperoni} onChange={handleChange}/>
      </label>
      <label>
        Sausage
      <input type="checkbox" id="sausage" name="sausage" checked={formData.sausage}  onChange={handleChange}/>
      </label>
      <label>
        Pineapple
      <input type="checkbox" id="pineapple" name="pineapple" checked={formData.pineapple} onChange={handleChange}/>
      </label>
      <label>
        Mushrooms
      <input type="checkbox" id="mushrooms" name="mushrooms" checked={formData.mushrooms} onChange={handleChange}/>
      </label>
      <label>
        Bacon
      <input type="checkbox" id="bacon" name="bacon" checked={formData.bacon}  onChange={handleChange}/>
      </label>
      <label>
        Extra Cheese
      <input type="checkbox" id="extra-cheese" name="extraCheese" checked={formData.extraCheese} onChange={handleChange}/>
      </label>
      <label>
        Green Peppers
      <input type="checkbox" id="green-peppers" name="greenPeppers" checked={formData.greenPeppers} onChange={handleChange} />
      </label>
      <label>
        Banana Peppers
      <input type="checkbox" id="banana-peppers" name="bananaPeppers" checked={formData.bananaPeppers} onChange={handleChange} />
      </label>

    </div>

    <label>
      Special Instructions:
      <input type="text" id="special-text" name="specialInstructions" value={formData.specialInstructions}  onChange={handleChange}/>
    </label>
      <button name="addToOrder" id="order-button">Add to Order</button>
    </form>
    </div>
  )

};



export default Order;