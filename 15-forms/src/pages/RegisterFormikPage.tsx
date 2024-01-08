import * as Yup from 'yup';
import {Form, Formik} from "formik";
import {MyTextInput} from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Page</h1>

            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }} onSubmit={(values) => {
                console.log(values)
            }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                .min(2)
                                .max(15)
                                .required(),
                            email: Yup.string()
                                .email()
                                .required(),
                            password1: Yup.string()
                                .min(6)
                                .required(),
                            password2: Yup.string()
                                .oneOf([Yup.ref('password1')], 'Password must match')
                                .required()
                        })
                    }>
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput name="name"
                                         label="Name"
                                         placeholder="Juan Perez"/>

                            <MyTextInput name="email"
                                         type="email"
                                         label="Email Address"
                                         placeholder="email@example.com"/>

                            <MyTextInput name="password1"
                                         type="password"
                                         label="Password"
                                         placeholder="***"/>

                            <MyTextInput name="password2"
                                         type="password"
                                         label="Repeat Password"
                                         placeholder="***"/>

                            <button type="submit">Create</button>
                            <button type="button"
                                    onClick={handleReset}>
                                Reset
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};