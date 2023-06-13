// import ReactSelect from 'react-select';
import styles from "./Select.module.css";

const Select = ({ label, name, options, formik, data }) => {
    return (
        <div className={styles.formControl}>
            <label>{label}</label>
            {/* used React-select */}
            {/* <ReactSelect
                name={name}
                options={options}
                value={formik.values[name]}
                onChange={(selectedOption) => formik.setFieldValue(name, selectedOption)}
                onBlur={() => formik.setFieldTouched(name)}
            /> */}
            {/* selected={options.find(option => option.value === data[name] ? 'selected' : '')} */}
            <select name={name} value={data[name] || formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </div>
    );
}

export default Select;