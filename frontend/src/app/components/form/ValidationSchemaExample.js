"use client";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
            .email('Invalid email')
            .required('Required'),
});

export const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName"
                           className={"form-control"}/>
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName"
                           className={"form-control"}/>
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <label htmlFor="email">Email</label>
                    <Field name="email"
                           type="email"
                           className={"form-control"}/>
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}

                    <button type="submit"
                            className={"btn btn-primary"}>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);