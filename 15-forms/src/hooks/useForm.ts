import {ChangeEvent, useState} from "react";

export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return {
        // Properties
        ...formData,
        formData,

        // Methods
        onChange
    };
}