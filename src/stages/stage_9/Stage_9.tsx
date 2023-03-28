import React, {useState} from 'react'
import styles from './Stage_9.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
  variant: string
}

const Stage_9: React.FC<Props> = ({nextStage, stage, variant}) => {


  return (
    <main>
      <h1 className={styles.heading}>Enter your email to see how you can grow with Nebula</h1>
      <input type='email' />
      <p className={styles.text}>*Nebula does not share any personal information. We'll email you a copy of your program for convenient access.</p>
      <p className={styles.text}>By continuing I agree with Privacy policy and Terms of use.</p>
      <button>Continue</button>

    </main>
  )
}

export default Stage_9