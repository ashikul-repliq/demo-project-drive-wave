"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GetCurrentUser from "@/utils/getCurrentUser";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const { refetch } = GetCurrentUser();
  const router = useRouter();
 

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Confirm password  must match Passwords "
      )
      .required("confirm password is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    //  handle the form submission

    //sign-up using local storage

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users) {
      const isEmailExist = users.find(({ email }) => email === values.email);
      if (isEmailExist) {
        toast.error("Email already exist");
        return;
      }
    }

    users.push(values);

    localStorage.setItem("current-user", JSON.stringify(values));
    localStorage.setItem("users", JSON.stringify(users));

    resetForm();
    refetch();
    toast.success('Account Successfully created!');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 m-5 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 ">
        <h2 className="text-2xl font-bold flex items-center justify-center mb-4">
          Sign Up
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                placeholder=" Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="text-white p-2 rounded-md w-full bg-gray-900 hover:bg-gray-700 "
            >
              Sign Up
            </button>

            <p className="mt-3 text-black  ">
              Already have an account!{" "}
              <Link
                href="/sign-in"
                className=" underline  text-purple-600 hover:text-red-600 "
              >
                Sign-In now
              </Link>{" "}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
