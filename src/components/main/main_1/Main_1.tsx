import React from 'react'
import styles from './Main_1.module.css';

import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { setGender } from "../../../store/actionCreators"

import male from '../../../assets/male.png'
import female from '../../../assets/female.png'

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_1: React.FC<Props> = ({nextStage, stage}) => {

  const dispatch: Dispatch<any> = useDispatch()


  const handleGoNext = () => {
    nextStage(stage + 1)
  }

  const SettingGender = React.useCallback(
    (gender: string) => dispatch(setGender(gender)),
    [dispatch]
  )

  const handleSetGender = (someGender: string) => {
    SettingGender(someGender)
    handleGoNext()
  }

  return (
    <main>
      <h1 className={styles.heading}>Understand Yourself and Improve Relationships With Astrology</h1>
      <p className={styles.text}>1-Minute Personal Assessment</p>
      <h5 className={styles.subheading}>Select your gender:</h5>
      <div className={styles.imageWrapper}>
        <div className={styles.male}>
          <img src={male} />
          <button onClick={() => handleSetGender('male')}>Male</button>
        </div>
        <div className={styles.female}>
          <img src={female} />
          <button onClick={() => handleSetGender('female')}>Female</button>
        </div>
      </div>
    </main>
  )
}

export default Stage_1