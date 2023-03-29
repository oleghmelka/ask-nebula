import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter correct email')
    .max(50, 'Email has a maximum limit of 50 characters')
    .min(5, "Must be more than 5 characters")
    .required('This field is required'),
})

export default BasicFormSchema