import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik';
import BasicFormSchema from '../../../utils/yup/yupSchema';
import styles from './Main_9.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
  variant: string
}

const Stage_9: React.FC<Props> = ({nextStage, stage, variant}) => {


  return (
    <main>
      <h1 className={styles.heading}>Enter your email to see how you can grow with Nebula</h1>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={BasicFormSchema}
        onSubmit={values => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
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
              touched.email && <div className="field-error">{errors.email}</div>}
            <p className={styles.text}>*Nebula does not share any personal information. We'll email you a copy of your program for convenient access.</p>
            <p className={styles.text}>By continuing I agree with Privacy policy and Terms of use.</p>
            <button type="submit" className={styles.formButton}>Continue</button>
          </Form>
        )}
      />
    </main>
  )
}

export default Stage_9





