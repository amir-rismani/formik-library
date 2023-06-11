
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const saveValues = {
  name: "Amir",
  email: "amir@ex.com",
  phone: "09123456789",
  password: "@Qwsa1234!",
  passwordConfirmation: "@Qwsa1234!",
  gender: "male"
}

// 1. State managment
const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
  gender: ""
}

// 2. Handle submittion
const onSubmit = (values) => {
  console.log(values);
}

// 3. Handle validation
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) errors.name = 'Name is required!'
//   if (!values.email) errors.email = 'Email is required!'
//   if (!values.password) errors.password = 'Password is required!'
//   return errors
// }

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required().matches(/^09[0-9]{9}$/, 'phone is invalid'),
  password: Yup.string().required().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  gender: Yup.string().required()
});
function App() {
  const [saveData, setSaveData] = useState(null);
  const formik = useFormik({ initialValues: saveData || initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });
  useEffect(() => {
    axios.get('http://localhost:3001/users/1')
      .then(res => setSaveData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' {...formik.getFieldProps('name')} />
          {formik.errors.name && formik.touched.name && <small className='error'>{formik.errors.name}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' {...formik.getFieldProps('email')} />
          {formik.errors.email && formik.touched.email && <small className='error'>{formik.errors.email}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <input type='text' id='phone' name='phone' {...formik.getFieldProps('phone')} />
          {formik.errors.phone && formik.touched.phone && <small className='error'>{formik.errors.phone}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' {...formik.getFieldProps('password')} />
          {formik.errors.password && formik.touched.password && <small className='error'>{formik.errors.password}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='passwordConfirmation'>Password Confirmation</label>
          <input type='password' id='passwordConfirmation' name='passwordConfirmation' {...formik.getFieldProps('passwordConfirmation')} />
          {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <small className='error'>{formik.errors.passwordConfirmation}</small>}
        </div>
        <div className='formGroup'>
          <input type='radio' id="male" name='gender' value="mail" onChange={formik.handleChange} checked={formik.values.gender === "male"} />
          <label htmlFor='male'>Male</label>
          <input type='radio' id="female" name='gender' value="femail" onChange={formik.handleChange} checked={formik.values.gender === "female"} />
          <label htmlFor='female'>Female</label>
          {formik.errors.gender && formik.touched.gender && <small className='error'>{formik.errors.gender}</small>}
        </div>
        <button type='submit' disabled={!formik.isValid}>Register</button>
      </form>
    </div>
  );
}

export default App;
