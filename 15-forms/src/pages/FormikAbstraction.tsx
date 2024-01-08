import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import {MyTextInput} from "../components/MyTextInput";

export const FormikAbstractionPage = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('First Name is Required'),
                    lastName: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Last Name is Required'),
                    email: Yup.string()
                        .email('Email Address must be a valid email')
                        .required('Email Address is Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Must accept the terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], 'IT Junior is not allowed')
                        .required('Job Type is Required'),
                })}>
                {
                    (formik) => (
                        <Form>
                            <MyTextInput label="First Name"
                                         name="firstName"
                                         placeholder="First Name"/>

                            <MyTextInput label="Last Name"
                                         name="lastName"
                                         placeholder="Last Name"/>

                            <MyTextInput label="Email Address"
                                         name="email"
                                         placeholder="Email Address"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="it-junior">IT Junior</option>
                                <option value="it-senior">IT Senior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};