import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    specialInstructions: yup
    .string()
    .trim(),
    pizzaDropdownValue: yup
    .string()
    .oneOf(['small', 'medium', 'large']),
pepperoni: yup.boolean(),
sausage: yup.boolean(),
pineapple: yup.boolean(),
mushrooms: yup.boolean(),
bacon: yup.boolean(),
extraCheese: yup.boolean(),
greenPeppers: yup.boolean(),
bananaPeppers: yup.boolean()
})


export default formSchema