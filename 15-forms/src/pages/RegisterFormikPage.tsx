import * as Yup from 'yup';
import {useFormik} from "formik";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
    const {
        handleSubmit,
        handleReset,
        getFieldProps,
        touched,
        errors
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password1: '',
            password2: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
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
        })
    });

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={handleSubmit}>
                <input
                    {...getFieldProps('name')}
                    placeholder="Name"
                    type="text"/>
                {touched.name && errors.name && <span>{errors.name}</span>}

                <input
                    {...getFieldProps('email')}
                    placeholder="Email"
                    type="text"/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <input
                    {...getFieldProps('password1')}
                    placeholder="Password"
                    type="password"/>
                {touched.password1 && errors.password1 && <span>{errors.password1}</span>}

                <input
                    {...getFieldProps('password2')}
                    placeholder="Repeat Password"
                    type="password"/>
                {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};