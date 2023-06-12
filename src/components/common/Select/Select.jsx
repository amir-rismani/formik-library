import ReactSelect from 'react-select';
import styles from "./Select.module.css";

const Select = ({ label, name, options, formik }) => {
    return (
        <div className={styles.formControl}>
            <label>{label}</label>
            <ReactSelect
                name={name}
                options={options}
                value={formik.values[name]}
                onChange={(selectedOption) => formik.setFieldValue(name, selectedOption)}
                onBlur={() => formik.setFieldTouched(name)}
            />
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </div>
    );
}

export default Select;