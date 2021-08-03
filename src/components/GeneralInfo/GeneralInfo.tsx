import { useFormik } from "formik";
import Input from "../shared/Input";
import { FormValuesI, ErrorFromValueI } from '../../helpers/interfaces'
import { generalInputArray } from '../../helpers/inputsArray'

const validateForm = (values: FormValuesI) => {
  const errors: ErrorFromValueI = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length <= 4) {
    errors.name = "Name too short";
  }

  return errors;
};

const GeneralInfo: React.FC<{ bindSubmitForm: any }> = ({ bindSubmitForm }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      primaryPhone: '',
      secondaryPhone: '',
      description: ''
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      console.log(values);
    },
    validate: (values) => validateForm(values)
  });

  const { errors, handleSubmit, handleChange, handleBlur, touched, values, submitForm } = formik

  bindSubmitForm(submitForm);

  return <div>
    <h3>General Info</h3>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        {generalInputArray.map(({ name, type, label }) => (
          <Input
            key={label}
            name={name}
            type={type}
            label={label}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
          />
        ))}
      </div>
    </form>
  </div>
};

export default GeneralInfo;

// box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
