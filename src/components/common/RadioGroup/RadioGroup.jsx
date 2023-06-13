import Radio from "./Radio/Radio"
const RadioGroup = ({ radioOptions, label, name, formik }) => {
    return (
        <>
            <label>{label}</label>
            {radioOptions.map(radioOption => <Radio key={radioOption.value} option={radioOption} name={name} formik={formik} />)}
            {formik.errors[name] && formik.touched[name] && <small className='error'>{formik.errors[name]}</small>}
        </>
    );
}

export default RadioGroup;