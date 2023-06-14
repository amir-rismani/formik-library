import styles from "./CheckBox.module.css"
const CheckBox = ({ option, name, formik, isFromGroup = true, className }) => {
    return (
        <div className={`${styles.formControl} ${className} ${!isFromGroup && styles.formControl.notGroup}`}>
            <div className={styles.checkBoxContainer}>
                <input
                    type='checkbox'
                    id={option.value}
                    name={name}
                    value={option.value}
                    onBlur={() => formik.setFieldTouched(name)}
                    onChange={formik.handleChange}
                    checked={isFromGroup ? formik.values[name].includes(option.value) : formik.values[name]}
                />
                <label htmlFor={option.value}>{option.label}</label>
            </div>
            {!isFromGroup && formik.errors[name] && formik.touched[name] && <div><small className='error'>{formik.errors[name]}</small></div>}
        </div>
    );
}

export default CheckBox;