import { Form, Formik } from "formik";
import Input from "../shared/Input";

const inputArray = [
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  { name: "name", type: "text", label: "Name" },
  { name: "primaryPhone", type: "tel", label: "Primary phone" },
  { name: "secondaryPhone", type: "tel", label: "Secondary phone" },
  { name: "description", type: "text", label: "Business description" },
];

interface FormValuesI {
  email: string;
  name: string;
  primaryPhone: string;
  secondaryPhone?: string;
  description: string;
}

interface ErrorFromValueI {
  email?: string;
  name?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  description?: string;
}

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

const GeneralInfo: React.FC<{ formRef: any }> = ({ formRef }) => {
  return (
    <div>
      <h3>General Info</h3>
      <Formik
        innerRef={formRef}
        initialValues={{
          name: "",
          email: "",
          primaryPhone: "",
          secondaryPhone: "",
          description: "",
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={(values) => validateForm(values)}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          console.log(values);
          //   setTimeout(() => {
          //     console.log(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
        }}
      >
        {({ errors, submitForm }) => {
          //   bindSubmitForm(submitForm);
          return (
            <Form autoComplete="off">
              <div>
                {inputArray.map(({ name, type, label }) => (
                  <Input
                    key={label}
                    name={name}
                    type={type}
                    label={label}
                    errors={errors}
                  />
                ))}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GeneralInfo;

// box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
