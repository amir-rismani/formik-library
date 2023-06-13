import Radio from "./Radio/Radio";
import styles from "./RadioGroup.module.css"
const RadioGroup = ({ radioOptions, label, name, formik }) => {
    return (
        <>
            <label>{label}</label>
            <div className={styles.radioItems}>
                {radioOptions.map(radioOption => <Radio key={radioOption.value} option={radioOption} name={name} formik={formik} />)}
            </div>
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </>
    );
}

export default RadioGroup;