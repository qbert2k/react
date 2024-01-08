import formJson from '../data/custom-form.json';
import {Form, Formik} from "formik";
import {MyTextInput} from "../components";

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {
                    ({handleReset}) => (
                        <Form>
                            {formJson.map(({type, name, value, label, placeholder}) => {
                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    name={name}
                                    label={label}
                                    placeholder={placeholder}/>
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