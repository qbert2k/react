import {useFormik, Form, Field, ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
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
                })}>
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="LastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};