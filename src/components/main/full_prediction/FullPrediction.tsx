import React from 'react'

import styles from './FullPrediction.module.css';

import heart from '../../../assets/heart.png'
import both from '../../../assets/both.png'
import head from '../../../assets/head.png'


type Props = {
  previousStage: (stage: number) => void
  nextStage: (stage: number) => void
  stage: number
  zodiac: string | null
  decisionSourse: string
}


const FullPrediction: React.FC<Props> = ({previousStage, nextStage, stage, zodiac, decisionSourse}) => {

  const handleGoBack = () => {
    previousStage(stage - 1)
  }

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  return (
    <main className={styles.main}>
      {
        decisionSourse === 'heart' && (
          <div className={styles.wrapper}>
            <img src={heart} alt="drawing comparing heart and mind"/>
            <h1 className={styles.heading}>Based on our data, 49% of <span className={styles.heading && styles.span}>{zodiac} </span> people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan.
            </h1>
          </div>
        )
      }
      {
        decisionSourse === 'both' && (
          <div className={styles.wrapper}>
            <img src={both} alt="drawing comparing heart and mind"/>
            <h1 className={styles.heading}>Based on our data, 39% of <span className={styles.heading && styles.span}>{zodiac} </span> people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan.</h1>
          </div>
        )
      }
      {
        decisionSourse === 'head' && (
          <div className={styles.wrapper}>
            <img src={head} alt="drawing comparing heart and mind"/>
            <h1 className={styles.heading}>Based on our data, only the top 17% of <span className={styles.heading && styles.span}>{zodiac} </span> people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious in your relationships.</h1>
          </div>
        )
      }
      <div className={styles.buttons}>
        <button onClick={handleGoBack}>Back</button>
        <button onClick={handleGoNext}>Next</button>
      </div>
    </main>
  )
}

export default FullPrediction