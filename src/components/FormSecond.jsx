import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSecondValidationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email Formate"),
  sex: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
});

const FormSecond = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={FormSecondValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div>
            <label>E-mail</label>
            <Field id="email" placeholder="Email" type="text" name="email" />
            <ErrorMessage name="email" />
          </div>
          <br></br>
          <div>
            <lable htmlFor="sex">
              Sex
              <div>
                <label>
                  <Field name="sex" type="radio" value="male" />
                  {""}
                  male
                </label>
                <label>
                  <Field name="sex" type="radio" value="female" />
                  {""}
                  Female
                </label>
              </div>
            </lable>
          </div>
          <br></br>
          <div>
            <label>Age</label>
            <Field id="age" placeholder="Age" name="age" />
            <ErrorMessage name="age" />
          </div>

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormSecond;
