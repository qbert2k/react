import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: 'Javier',
                    lastName: 'Rojas',
                    email: 'javier.rojas.blum@gmail.com',
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
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

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