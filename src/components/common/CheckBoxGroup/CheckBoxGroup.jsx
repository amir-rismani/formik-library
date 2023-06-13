import CheckBox from "./CheckBox/CheckBox";
import styles from "./CheckBoxGroup.module.css"
const CheckBoxGroup = ({ checkBoxOptions, label, name, formik }) => {
    return (
        <>
            <label>{label}</label>
            <div className={styles.checkBoxItems}>
                {checkBoxOptions.map(checkBoxOption => <CheckBox key={checkBoxOption.value} option={checkBoxOption} name={name} formik={formik} />)}
            </div>
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </>
    );
}

export default CheckBoxGroup;