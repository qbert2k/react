import "../styles/styles.css";
import {ChangeEvent, FormEvent, useState} from "react";

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const {name, email, password1, password2} = registerData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setRegisterData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(registerData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input type="text"
                       placeholder="Name"
                       name="name"
                       value={name}
                       onChange={onChange}/>

                <input type="email"
                       placeholder="Email"
                       name="email"
                       value={email}
                       onChange={onChange}/>

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

                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};