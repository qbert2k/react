import React, {useEffect} from 'react';
import './effects.css';
import {useForm} from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom Hook</h1>
            <hr/>

            <div className="formGroup">
                <input type="text"
                       name="name"
                       className="form-control"
                       placeholder="Tu nombre"
                       autoComplete="off"
                       value={name}
                       onChange={handleInputChange}/>
            </div>

            <div className="formGroup">
                <input type="text"
                       name="email"
                       className="form-control"
                       placeholder="email@gmail.com"
                       autoComplete="off"
                       value={email}
                       onChange={handleInputChange}/>
            </div>

            <div className="formGroup">
                <input type="password"
                       name="password"
                       className="form-control"
                       placeholder="*****"
                       value={password}
                       onChange={handleInputChange}/>
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}