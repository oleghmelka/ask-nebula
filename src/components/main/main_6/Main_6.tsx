import React from 'react'
import { nanoid } from 'nanoid'

import styles from './Main_6.module.css';


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

  const buttonsSingleParent: Array<string> = [
    'I was unhappy with low things were going in my relationship',
    'I was unhappy with parts of my relationship, but some thing were working',
    'I was generally happy with my relationship',
    'I’ve never been in a relationship'
   ]

  const buttonsParent: Array<string> = [
    'I’ve never been in a relationship',
    'I’m unhappy with parts of my relationship, but some things are working well',
    'I’m generally happy in my relationship'
  ]

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  return (
    <main className={styles.main}>
      { status === 'in a relationship' && (
          // in figma it part in the bottom
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>
              {`${gender} ${age} ${(isParent || isSingleParent) ? 'who have children' : 'who haven`t children'} need a slightly different approach 
              to improve their relationship. Which statement best describes you?`}
            </h1>
            <div className={styles.buttons}>
                {
                  buttonsParent.map((item) => (
                    <button onClick={handleGoNext} key={nanoid()}>{item}</button>
                  ))
                }
            </div>
          </div>
        )}
        { status === 'single' && (
          // in figma it part in the top
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>
              {`Single ${gender} ${age} ${(isParent || isSingleParent) ? 'who have children' : 'who haven`t children'} need a slightly different approach to find
              their perfect partner. But first, how did you feel in your last relationship?`}
            </h1>
            <div className={styles.buttons}>
              {
                buttonsSingleParent.map((item) => (
                  <button onClick={handleGoNext} key={nanoid()}>{item}</button>
                ))
              }
            </div>
          </div>
      )}

    </main>
  )
}

export default Stage_6