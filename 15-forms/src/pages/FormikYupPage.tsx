import {useFormik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First Name is Required'),
            lastName: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Last Name is Required'),
            email: Yup.string()
                .email('Email Address must be a valid email')
                .required('Email Address is Required'),
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       name="firstName"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.firstName}/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                       name="lastName"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.lastName}/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email"
                       name="email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.email}/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};