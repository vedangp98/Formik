import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const FormThirdValidationSchema = Yup.object({
  favouritecolor: Yup.string().required("Required"),
  employed: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
});

const renderColorSelector = ({ input, meta: { error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {<span>{error}</span>}
  </div>
);

const FormThird = (props) => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      validationSchema={FormThirdValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="favouritecolor">Favourite Color</label>
            <Field name="favouritecolor" component={renderColorSelector} />
            <ErrorMessage name="favouritecolor" />
          </div>

          <div>
            <label htmlFor="employed">Employed</label>
            <Field
              type="checkbox"
              name="employed"
              id="employed"
              component="input"
            />
            <ErrorMessage />
          </div>

          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
            <ErrorMessage />
          </div>

          <div>
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Next</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormThird;
