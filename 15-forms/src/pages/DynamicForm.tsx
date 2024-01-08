import formJson from '../data/custom-form.json';
import {Form, Formik} from "formik";
import {MyTextInput} from "../components";

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={{}}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {
                    (formik) => (
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
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}