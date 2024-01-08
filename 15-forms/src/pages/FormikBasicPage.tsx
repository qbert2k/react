import {FormikErrors, useFormik} from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName =  'Required';
        } else if (firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {
            firstName: 'Javier',
            lastName: 'Rojas',
            email: 'javier.rojas.blum@gmail.com'
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       name="firstName"
                       onChange={handleChange}
                       value={values.firstName}/>
                <span>First Name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                       name="lastName"
                       onChange={handleChange}
                       value={values.lastName}/>
                <span>Last Name is required</span>

                <label htmlFor="email">Email Address</label>
                <input type="email"
                       name="email"
                       onChange={handleChange}
                       value={values.email}/>
                <span>Email is required</span>
                <span>Email is not valid</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};