import React from 'react'
import * as Yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from "formik"
let schema =Yup.object().shape({
    username : Yup.string()
    .min(2,'username too short')
    .required(),
    email: Yup.string()
    .email("Invalid email")
    .required(),
    password :Yup.string()
    .min(3,"password too short")
    .required()
   
})
function formikForm() {
  return (
   <Formik initialValues={{email :"" ,password: "" , username :""}} validationSchema={schema}>
     {({isSubmitting})=>(
       <Form>
         <Field type="username" name="username" />
         <ErrorMessage name="username" component="div" />
       <Field type="email" name="email" />
       <ErrorMessage name="email" component="div" />
       <Field type="password" name="password" />
       <ErrorMessage name="password" component="div" />
       <button type="submit" disabled={isSubmitting}>
         Submit
       </button>
     </Form>
     )}
   </Formik>
  )
}

export default formikForm
