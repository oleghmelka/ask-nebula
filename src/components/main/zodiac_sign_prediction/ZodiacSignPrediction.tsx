import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from "react-redux"

import styles from './ZodiacSignPrediction.module.css';


type Props = {
  nextStage: (stage: number) => void
  stage: number
  zodiac: string | null
}


const ZodiacSignPrediction: React.FC<Props> = ({nextStage, stage, zodiac}) => {

  type StagesState = {
    stage: number
    total: number
    gender: string
  }
  
  const gender: string = useSelector(
    (state: StagesState) => state.gender,
    shallowEqual
  )

  const handleGoNext = () => {
      nextStage(stage + 1)
  }

  useEffect(() => {
    const time = setTimeout(() => {
      handleGoNext()
    }, 4000)
    return () => clearTimeout(time)
  }, [])
  

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>We've helped 2,865,756* other <span className={styles.heading && styles.span}>{zodiac} </span>{`${gender} to find their perfect partner and we can't wait to help you too!`}</h1>
      <h5 className={styles.subheading}>*as of 24 February 2023</h5>
      <div className={styles.connecting}>
        <p className={styles.text}>Connecting to database...</p>
      </div>
    </main>
  )
}

export default ZodiacSignPrediction