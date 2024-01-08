import formJson from '../data/custom-form.json';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {MySelect, MyTextInput} from "../components";


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('The field is required');
        }

        if (rule.type === 'min') {
            const minValue = (rule as any).value || 1;
            schema = schema.min(minValue,
                `The field must be at least ${minValue} characters`);
        }

        if(rule.type === 'email') {
            schema=schema.email();
        }

        // TODO: more rules....
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}>
                {
                    ({handleReset}) => (
                        <Form noValidate>
                            {formJson.map(({type, name, value, label, placeholder, options}) => {
                                if (type === 'text' || type === 'password' || type === 'email') {
                                    return <MyTextInput
                                        key={name}
                                        type={(type as any)}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}/>
                                } else if (type === 'select') {
                                    return <MySelect
                                        key={name}
                                        label={label}
                                        name={name}>
                                        <option value="">Select an option</option>
                                        {
                                            options?.map(({id, label}) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>;
                                }

                                throw new Error(`Type: ${type} is not supported`);
                            })}

                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}