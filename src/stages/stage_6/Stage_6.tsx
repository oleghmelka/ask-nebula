import React, {useState} from 'react'
import styles from './Stage_6.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
  status: string
  gender: string
  age: number
  isParent: boolean
  isSingleParent: boolean
}

const Stage_6: React.FC<Props> = ({nextStage, stage, status, gender, age, isParent, isSingleParent}) => {

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  return (
    <main>
      { status === 'in a relationship' && (
          // in figma it part in the bottom
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>
              `${gender} ${age} ${isParent || isSingleParent && 'who have children'} need a slightly different approach 
              to improve their relationship. Which statement best describes you?`
            </h1>
            <div className={styles.buttons}>
              <button onClick={handleGoNext}>I’ve never been in a relationship</button>
              <button onClick={handleGoNext}>I’m unhappy with parts of my relationship, but some things are working well</button>
              <button onClick={handleGoNext}>I’m generally happy in my relationship</button>
            </div>
          </div>
        )}
        { status === 'single' && (
          // in figma it part in the top
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>
              `Single ${gender} ${age} ${isParent || isSingleParent && 'who have children'} need a slightly different approach to find
              their perfect partner. But first, how did you feel in your last relationship?``
            </h1>
            <div className={styles.buttons}>
              <button onClick={handleGoNext}>I was unhappy with low things were going in my relationship</button>
              <button onClick={handleGoNext}>I was unhappy with parts of my relationship, but some thing were working</button>
              <button onClick={handleGoNext}>I was generally happy with my relationship</button>
              <button onClick={handleGoNext}>I’ve never been in a relationship</button>
            </div>
          </div>
      )}

    </main>
  )
}

export default Stage_6