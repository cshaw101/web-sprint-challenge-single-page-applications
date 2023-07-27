import React from "react";
import { useNavigate } from "react-router-dom";

const Order = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props;

  const handleChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
  };


 const navigate = useNavigate();

const toConfirm = () => {
  if (disabled === false) {
    navigate('/confirmation')
  }else {
    console.log('whoops')
  }
  
}

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <div className="formContainer">
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.specialInstructions}</div>
          <div>{errors.pizzaDropdownValue}</div>
        </div>

        <label>Enter Name:
          <input type="text" id="name-input" name="name" value={values.name} onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="pizzaDropdown">
          Pizza Size:
          <select id="size-dropdown" onChange={handleChange} name="pizzaDropdownValue" value={values.pizzaDropdownValue}>
            <option value="option">--Select Option--</option>
            <option value="small">10"</option>
            <option value="medium">12"</option>
            <option value="large">16"</option>
          </select>
        </label>

        <div>
        <div>
      <label>
        Pepperoni
      <input type="checkbox" id="pepperoni" name="pepperoni" checked={values.pepperoni} onChange={handleChange}/>
      </label>
      <label>
        Sausage
      <input type="checkbox" id="sausage" name="sausage" checked={values.sausage}  onChange={handleChange}/>
      </label>
      <label>
        Pineapple
      <input type="checkbox" id="pineapple" name="pineapple" checked={values.pineapple} onChange={handleChange}/>
      </label>
      <label>
        Mushrooms
      <input type="checkbox" id="mushrooms" name="mushrooms" checked={values.mushrooms} onChange={handleChange}/>
      </label>
      <label>
        Bacon
      <input type="checkbox" id="bacon" name="bacon" checked={values.bacon}  onChange={handleChange}/>
      </label>
      <label>
        Extra Cheese
      <input type="checkbox" id="extra-cheese" name="extraCheese" checked={values.extraCheese} onChange={handleChange}/>
      </label>
      <label>
        Green Peppers
      <input type="checkbox" id="green-peppers" name="greenPeppers" checked={values.greenPeppers} onChange={handleChange} />
      </label>
      <label>
        Banana Peppers
      <input type="checkbox" id="banana-peppers" name="bananaPeppers" checked={values.bananaPeppers} onChange={handleChange} />
      </label>
    </div>
        </div>

        <label>
          Special Instructions:
          <input type="text" id="special-text" name="specialInstructions" value={values.specialInstructions} onChange={handleChange} />
        </label>

        <button onClick={toConfirm} navigate={navigate} disabled={disabled} name="addToOrder" id="order-button">Add to Order</button>
      </div>
    </form>
  );
};

export default Order;