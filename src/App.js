
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
// 1. State managment
const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
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
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});
function App() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true })
  return (
    <div className="App">
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name</label>
          <input name='name' {...formik.getFieldProps('name')} />
          {formik.errors.name && formik.touched.name && <small className='error'>{formik.errors.name}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input name='email' {...formik.getFieldProps('email')} />
          {formik.errors.email && formik.touched.email && <small className='error'>{formik.errors.email}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <input name='phone' {...formik.getFieldProps('phone')} />
          {formik.errors.phone && formik.touched.phone && <small className='error'>{formik.errors.phone}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>Password</label>
          <input name='password' {...formik.getFieldProps('password')} />
          {formik.errors.password && formik.touched.password && <small className='error'>{formik.errors.password}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='passwordConfirmation'>Password Confirmation</label>
          <input name='passwordConfirmation' {...formik.getFieldProps('passwordConfirmation')} />
          {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <small className='error'>{formik.errors.passwordConfirmation}</small>}
        </div>

        <button type='submit' disabled={!formik.isValid}>Register</button>
      </form>
    </div>
  );
}

export default App;
