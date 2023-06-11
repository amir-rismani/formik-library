import styles from './Input.module.css'
const Input = ({ label, name, type = 'text', formik }) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} {...formik.getFieldProps({ name })} />
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </div >
    );
}

export default Input;