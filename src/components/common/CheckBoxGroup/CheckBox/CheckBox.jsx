import styles from "./CheckBox.module.css"
const CheckBox = ({ option, name, formik }) => {
    return (
        <div className={styles.formControl}>
            <input type='checkbox' id={option.value} name={name} value={option.value} onBlur={() => formik.setFieldTouched(name)}
                onChange={formik.handleChange} checked={formik.values[name].includes(option.value)} />
            <label htmlFor={option.value}>{option.label}</label>
        </div>
    );
}

export default CheckBox;