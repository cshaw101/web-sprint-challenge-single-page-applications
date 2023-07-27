import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove 'Link'
import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";
import axios from 'axios';
import * as yup from 'yup';
import schema from "./schema";

const initialFormValues = {

name: '',
specialInstructions: '',

pizzaDropdownValue: '',

pepperoni: false,
sausage: false,
pineapple: false,
mushrooms: false,
bacon: false,
extraCheese: false,
greenPeppers: false,
bananaPeppers: false,
};

const initialFormErrors = {
name: '',
specialInstructions: '',
pizzaDropdownValue: ''
};

const initialDisabled = true;

const App = () => {
const [formvalues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

const addNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    });
};

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
};

const onChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formvalues, [name]: value
  });
};

useEffect(() => {
  schema.isValid(formvalues).then(valid => setDisabled(!valid));
}, [formvalues]);

return (
  <div className="appWrapper">
  

  {/* Conditionally render the Navbar only on the Homepage */}
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="pizza" element={<Order values={formvalues} submit={addNewOrder} errors={formErrors} change={onChange} disabled={disabled} />} />
    <Route path="confirmation" element={<Confirmation />} />
  </Routes>
</div>
);
};









export default App;
