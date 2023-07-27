import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';



const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; /* Increase the gap between elements */
  margin-top: 40px;
  width: 400px; /* Set the desired width of the form */
  margin: 0 auto; /* Center the form horizontally */
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px; /* Increase the gap between input and label */
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; /* Increase the gap between checkboxes */
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 16px 32px;
  background-color: red;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content; 
  align-self: center; 
  margin-top: 10px;
  margin-left:60px;

`;



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

  navigate('/confirmation')
}

return (
  <Form id="pizza-form" onSubmit={handleSubmit}>
    <div className="formContainer">
      <div className='errors'>
        <div>{errors.name}</div>
        <div>{errors.specialInstructions}</div>
        <div>{errors.pizzaDropdownValue}</div>
      </div>

      <Label>
        Enter Name For Order:
        <input type="text" id="name-input" name="name" value={values.name} onChange={handleChange} />
      </Label>

      <Label htmlFor="pizzaDropdown">
        Pizza Size:
        <select id="size-dropdown" onChange={handleChange} name="pizzaDropdownValue" value={values.pizzaDropdownValue}>
          <option value="option">--Select Option--</option>
          <option value="small">10"</option>
          <option value="medium">12"</option>
          <option value="large">16"</option>
        </select>
      </Label>

      <CheckboxContainer>
        <CheckboxLabel>
          Pepperoni
          <input type="checkbox" id="pepperoni" name="pepperoni" checked={values.pepperoni} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Sausage
          <input type="checkbox" id="sausage" name="sausage" checked={values.sausage} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Pineapple
          <input type="checkbox" id="pineapple" name="pineapple" checked={values.pineapple} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Mushrooms
          <input type="checkbox" id="mushrooms" name="mushrooms" checked={values.mushrooms} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Bacon
          <input type="checkbox" id="bacon" name="bacon" checked={values.bacon} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Extra Cheese
          <input type="checkbox" id="extra-cheese" name="extraCheese" checked={values.extraCheese} onChange={handleChange}/>
        </CheckboxLabel>
        <CheckboxLabel>
          Green Peppers
          <input type="checkbox" id="green-peppers" name="greenPeppers" checked={values.greenPeppers} onChange={handleChange} />
        </CheckboxLabel>
        <CheckboxLabel>
          Banana Peppers
          <input type="checkbox" id="banana-peppers" name="bananaPeppers" checked={values.bananaPeppers} onChange={handleChange} />
        </CheckboxLabel>
        
      </CheckboxContainer>

      <Label>
        Special Instructions:
        <input type="text" id="special-text" name="specialInstructions" value={values.specialInstructions} onChange={handleChange} />
      </Label>

      <Button onClick={toConfirm} disabled={disabled} name="addToOrder" id="order-button">Add to Order</Button>
    </div>
  </Form>
);
};

export default Order;
