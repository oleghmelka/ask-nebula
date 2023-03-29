import React, { useEffect } from 'react'
import styles from './Main_3.module.css';
import { useSelector, shallowEqual } from "react-redux"


type Props = {
  nextStage: (stage: number) => void
  stage: number
  zodiac: string | null
}

const Stage_3: React.FC<Props> = ({nextStage, stage, zodiac}) => {

  type StagesState = {
    stage: number
    total: number
    gender: string
  }
  
  const gender: string = useSelector(
    (state: StagesState) => state.gender,
    shallowEqual
  )

  useEffect(() => {
      const time = setTimeout(() => {
        handleGoNext()
      }, 4000)
      return () => clearTimeout(time)
    }, [])

  const handleGoNext = () => {
      nextStage(stage + 1)
  }

  

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

export default Stage_3