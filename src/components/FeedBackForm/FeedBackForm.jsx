import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
    username: "",
    email: ""
}
const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required!"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
	level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});
const FeedBackForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();
    return(
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form>
                <div>
                <label htmlFor={nameFieldId}>Username</label>
                <Field type="text" name="username" id={nameFieldId}/>
                <ErrorMessage name="username" component="span"/>
                </div>
                <div>
                <label htmlFor={emailFieldId}>E-mail</label>
                <Field type="email" name="email" id={emailFieldId}/>
                <ErrorMessage name="email" component="span"/>
                </div>
                <div>
                <label htmlFor={msgFieldId}>Message</label>
                <Field as="textarea" name="message" id={msgFieldId} rows="5"/>
                <ErrorMessage name="message" component="span"/>
                </div>
                <label htmlFor={levelFieldId}>Service satisfaction level</label>
                <Field as="select" name="level" id={levelFieldId}>
                    <option value="good">Good</option>
                    <option value="neutral">Neutral</option>
                    <option value="bad">Bad</option>
                </Field>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default FeedBackForm