import React from 'react'
import {Formik,Form,Field,ErrorMessage,validateYupSchema} from "formik"
function formikForm() {
  return (
   <Formik initialValues={{email :"" ,password: "" , username :""}}>
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
