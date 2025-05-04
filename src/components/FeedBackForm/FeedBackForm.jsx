import { Field, Form, Formik } from "formik";

const FeedBackForm = () => {
    return(
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
                <Field type="text" name="username"/>
                <Field type="email" name="email"/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default FeedBackForm