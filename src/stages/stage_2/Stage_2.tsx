import React from 'react'
import styles from './Stage_2.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_2: React.FC<Props>  = ({nextStage, stage}) => {

  const handleGoNext = () => {
    nextStage(stage + 1)
  }

  return (
    <main>
    <h1 className={styles.subheading}>Your profile</h1>
    <p className={styles.heading}>What time were you born?</p>
    <h5 className={styles.text}>We use NASA data to identify the exact position of the planets in the sky at the time of your birth.</h5>
    <div className={styles.birhDate}>
      Tyme Cheker
    </div>
    <button onClick={handleGoNext}>Next</button>
  </main>
  )
}

export default Stage_2