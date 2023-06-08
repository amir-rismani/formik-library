
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
// 1. State managment
const initialValues = {
  name: "",
  email: "",
  password: ""
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
  password: Yup.string().required().min(6),
});
function App() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema })
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
          <label htmlFor='password'>Password</label>
          <input name='password' {...formik.getFieldProps('password')} />
          {formik.errors.password && formik.touched.password && <small className='error'>{formik.errors.password}</small>}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
