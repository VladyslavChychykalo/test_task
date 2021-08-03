import { Form, Formik } from "formik";
import Input from "../shared/Input";

const inputArray = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  { name: "lastName", type: "text", label: "Last Name" },
  //   { name: "primaryPhone", type: "tel", label: "Primary phone" },
  //   { name: "secondaryPhone", type: "tel", label: "Secondary phone" },
  { name: "date", type: "date", label: "Birthday" },
  { name: "experience", type: "number", label: "Work Experience (years)" },
];

const ModalWindow: React.FC = () => {
  return (
    <div className="backfrop">
      <div>
        <h4>Add user</h4>
        <p>Check all fields before click on Save button</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            datetime: "",
            experience: "",
          }}
          validateOnChange={false}
          validateOnBlur={false}
          //   validate={(values) => validateForm(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);

            console.log(values);
            //   setTimeout(() => {
            //     console.log(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            //   }, 400);
          }}
        >
          {({ errors }) => {
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
                  <p>Gender</p>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ModalWindow;
