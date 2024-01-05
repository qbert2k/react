import {ChangeEvent, useState} from "react";

export const useForm = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setRegisterData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return {
        // Properties
        registerData,

        // Methods
        onChange
    };
}