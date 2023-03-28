import React, {useState} from 'react'
import styles from './Stage_3.module.css';
import { useSelector, shallowEqual, useDispatch } from "react-redux"



type Props = {
  nextStage: (stage: number) => void
  stage: number
  zodiac: string
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

  console.log('gender from Stage_3', gender)

  const handleGoNext = () => {
    setTimeout(() => {
      nextStage(stage + 1)
    }, 2000)
  }

  handleGoNext()

  return (
    <main>
      <h1 className={styles.heading}>{`We've helped 2,865,756* other ${zodiac} ${gender} to find their perfect partner and we can't wait to help you too!`}</h1>
      <h5 className={styles.subheading}>*as of 24 February 2023</h5>
      <div className={styles.connecting}>
        Connecting to database...
      </div>
    </main>
  )
}

export default Stage_3