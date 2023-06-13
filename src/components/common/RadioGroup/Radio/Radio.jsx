import styles from "./Radio.module.css"
const Radio = ({ option, name, formik }) => {
    return (
        <div className={styles.formControl}>
            <input type='radio' id={option.value} name={name} value={option.value} onChange={formik.handleChange} checked={formik.values[name] === option.value} />
            <label htmlFor={option.value}>{option.label}</label>
        </div>
    );
}

export default Radio;