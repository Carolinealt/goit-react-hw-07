import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  let schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short")
      .max(50, "too long")
      .required("required"),
    number: Yup.string()
      .min(2, "too short")
      .max(50, "too long")
      .required("required"),
  });

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={({ name, number }) => {
          dispatch(addContact({ id: nanoid(), name, number }));
        }}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" className={css.field} />
          </label>
          <label htmlFor="number">
            Number
            <Field type="text" name="number" className={css.field} />
          </label>
          <button type="submit" className={css.addBtn}>
            add
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
