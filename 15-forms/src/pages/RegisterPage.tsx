import {FormEvent} from "react";
import "../styles/styles.css";
import {useForm} from "../hooks/useForm";

export const RegisterPage = () => {

    const {
        formData, onChange, resetForm, isValidEmail,
        name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input type="text"
                       placeholder="Name"
                       name="name"
                       value={name}
                       onChange={onChange}
                       className={`${name.trim().length <= 0 && 'has-error'}`}/>
                {name.trim().length <= 0 && <span>The field is mandatory</span>}

                <input type="email"
                       placeholder="Email"
                       name="email"
                       value={email}
                       onChange={onChange}
                       className={`${!isValidEmail(email) && 'has-error'}`}/>
                {!isValidEmail(email) && <span>The email is not valid</span>}

                <input type="password"
                       placeholder="Password"
                       name="password1"
                       value={password1}
                       onChange={onChange}/>

                <input type="password"
                       name="password2"
                       placeholder="Repeat Password"
                       value={password2}
                       onChange={onChange}/>

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    );
};