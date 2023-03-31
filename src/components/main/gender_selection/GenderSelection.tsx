import React from 'react'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

import { setGender, CombinedType } from "../../../store/actionCreators"

import styles from './GenderSelection.module.css';

import male from '../../../assets/male.png'
import female from '../../../assets/female.png'
//import arrow_right from '../../../assets/arrow.png' // it is impossible to download from Figma in png or jpg format, only in zip


type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const GenderSelection: React.FC<Props> = ({nextStage, stage}) => {

  const dispatch: Dispatch<CombinedType> = useDispatch()

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
    <main className={styles.main}>
      <h1 className={styles.heading}>Understand Yourself and Improve Relationships With Astrology</h1>
      <p className={styles.text}>1-Minute Personal Assessment</p>
      <h5 className={styles.subheading}>Select your gender:</h5>
      <div className={styles.imageWrapper}>
        <div className={styles.male} onClick={() => handleSetGender('male')}>
          <img src={male} alt='male avatar' />
          <button>
            Male
            {/* <img src={arrow_right} /> */}
          </button>
        </div>
        <div className={styles.female} onClick={() => handleSetGender('female')}>
          <img src={female} alt='female avatar' />
          <button>
            Female
            {/* <img src={arrow_right} /> */}
          </button>
        </div>
      </div>
    </main>
  )
}

export default GenderSelection