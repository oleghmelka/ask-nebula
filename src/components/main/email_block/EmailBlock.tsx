import React from 'react'
import { Formik, Field, Form } from 'formik';
import BasicFormSchema from '../../../utils/yup/yupSchema';

import styles from './EmailBlock.module.css';

type Props = {
  setCurrentEmail: (email: string) => void
}

const EmailBlock: React.FC<Props> = ({ setCurrentEmail }) => {

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Enter your email to see how you can grow with Nebula</h1>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          setTimeout(() => {
            setCurrentEmail(values.email);
          }, 500);
        }}
        render={({ errors, touched }) => (
          <Form className={styles.formContainer}>
            <Field
              name="email"
              placeholder="Your email"
              type="email"
            />
            { errors.email &&
              touched.email && <div className={styles.fieldError}>{errors.email}</div>}
            <p className={styles.text}>*Nebula does not share any personal information. We'll email you a copy of your program for convenient access.</p>
            <p className={styles.text}>By continuing I agree with <span><a href='#'>Privacy policy</a></span> and <span><a href='#'>Terms of use</a></span>.</p>
            <button type="submit" className={styles.formButton}>Continue</button>
          </Form>
        )}
      />
    </main>
  )
}

export default EmailBlock





