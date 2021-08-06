import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormFirstValidationSchema = Yup.object({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
});

const FormFirst = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={FormFirstValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="firstname">First Name</label>
          <Field
            type="text"
            placeholder="FirstName"
            id="firstname"
            name="first_name"
          />
          <ErrorMessage name="first_name" />
        </div>
        <br></br>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <Field
            type="text"
            placeholder="LastName"
            id="lastname"
            name="last_name"
          />
          <ErrorMessage name="last_name" />
        </div>

        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default FormFirst;
