"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import GetCurrentUser from "@/utils/getCurrentUser";
import { toast } from "react-hot-toast";

const SignInPage = () => {
  const { refetch } = GetCurrentUser();
  const router = useRouter();
  const redirect =  localStorage.getItem('redirect') || '/';
  console.log(redirect);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // handle the form submission
    // console.log(values);

    //sign-in using local storage

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users) {
      const isEmailExist = users.find(({ email }) => email === values.email);
      const isPasswordExist = users.find(
        ({ password }) => password === values.password
      );
      if (!isEmailExist) {
        toast.error("Email does not exist");
        return;
      }
      if (!isPasswordExist) {
        toast.error("Password does not match");
        return;
      }
      localStorage.setItem("current-user", JSON.stringify(isEmailExist));
    }
toast.success('Sign-In Successful!');
    router.push(redirect);
    localStorage.removeItem('redirect');
    
    refetch();
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-tl-3xl rounded-br-3xl shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold flex items-center justify-center mb-4">
          Sign In
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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
                placeholder="Email"
                name="email"
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
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="text-white p-2 rounded-md w-full bg-red-600 hover:bg-black "
            >
              Sign In
            </button>
            <p className="mt-3 text-black  ">
              Don &apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-red-600 underline hover:text-purple-600"
              >
                Sign-Up now
              </Link>{" "}
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignInPage;
