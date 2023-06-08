
import { useFormik } from 'formik';
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
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'Name is required!'
  if (!values.email) errors.email = 'Email is required!'
  if (!values.password) errors.password = 'Password is required!'
  return errors
}
function App() {
  const formik = useFormik({ initialValues, onSubmit, validate })
  return (
    <div className="App">
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name</label>
          <input value={formik.values.name} name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.name && formik.touched.name && <small className='error'>{formik.errors.name}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email && <small className='error'>{formik.errors.email}</small>}
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>Password</label>
          <input value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password && <small className='error'>{formik.errors.password}</small>}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
