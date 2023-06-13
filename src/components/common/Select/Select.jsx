import ReactSelect from 'react-select';
import styles from "./Select.module.css";

const Select = ({ label, name, options, formik }) => {
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
            <select name={name} {...formik.getFieldProps(name)}>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </div>
    );
}

export default Select;