// Render Prop

import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Basic = () => (
  <div>
    <h1>Formik Form !</h1>
    <Formik
      initialValues={{ email: "", password: "", subjects: [""] }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Splitting the subjects input into an array
        values.subjects = values.subjects
          .split(",")
          .map((subject) => subject.trim());

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ backgroundColor: "white", padding: "20px" }}>
          <Field
            type="email"
            name="email"
            placeholder="Enter email"
            as={TextField}
            id="email"
            label="Email"
            fullWidth
          />
          <ErrorMessage name="email" component="div" />
          <br></br>
          <br></br>
          <Field
            type="password"
            name="password"
            as={TextField}
            placeholder="Enter password"
            label="Password"
            id="password"
            fullWidth
          />
          <ErrorMessage name="password" component="div" />
          <br></br>

          {/* Adding text input for the 'subjects' array */}
          <br></br>

          <Field
            name="subjects"
            label="Subjects"
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter subjects separated by commas"
            as={TextField}
            fullWidth
          />
          <br></br>
          <br></br>
          <ErrorMessage name="subjects" component="div" />

          <Button type="submit" disabled={isSubmitting} variant="contained">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
