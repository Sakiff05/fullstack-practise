import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string().url().required("Required"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
});

export default function Add() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="py-10 bg-rose-500 h-[89.7vh]">
      <Helmet>
        <title>Add card</title>
        <meta name="description" content="add page" />
      </Helmet>

      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl text-white text-center my-10">ADD FORM</h1>
        <Formik
          initialValues={{
            title: "",
            country: "",
            image: "",
            description: "",
          }}
          validationSchema={AddSchema}
          onSubmit={(values) => {
            axios
              .post("http://localhost:5000/cards/", values)
              .then(() =>
                Swal.fire({
                  icon: "success",
                  title: "Successfully added card",
                  showConfirmButton: false,
                  timer: 1500,
                })
              )
              .then(() => navigate("/"));
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col w-screen items-center gap-2">
              <Field
                name="title"
                placeholder="Title"
                className="border border-black rounded p-2 w-6/12"
              />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
              <Field
                name="country"
                placeholder="Country"
                className="border border-black rounded p-2 w-6/12"
              />
              {errors.country && touched.country ? (
                <div>{errors.country}</div>
              ) : null}
              <Field
                name="image"
                type="text"
                placeholder="Image"
                className="border border-black rounded p-2 w-6/12"
              />
              {errors.image && touched.image ? <div>{errors.image}</div> : null}
              <Field
                name="description"
                type="text"
                placeholder="Description"
                className="border border-black rounded p-2 w-6/12"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}

              <button
                type="submit "
                className="border border-rose-400 rounded p-2 bg-rose-400 mt-5 w-40 hover:bg-rose-300 text-white text-2xl"
              >
                Add card
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
