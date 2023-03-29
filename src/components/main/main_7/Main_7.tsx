import React, {useState} from 'react'
import styles from './Main_7.module.css';

import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { setDecisionSourse } from "../../../store/actionCreators"

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_7: React.FC<Props> = ({nextStage, stage}) => {

  const dispatch: Dispatch<any> = useDispatch()

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  const SettingDecisionSourse = React.useCallback(
    (decisionSourse: 'heart' | 'head' | 'both') => dispatch(setDecisionSourse(decisionSourse)),
    [dispatch]
  )

  const handleSetDecisionSourse = (decisionSourse: 'heart' | 'head' | 'both') => {
    SettingDecisionSourse(decisionSourse)
    handleGoNext()
  }

  return (
    <main>
      <h1 className={styles.heading}>Do you make decisions with your head or your heart?</h1>
      <div className={styles.buttons}>
        <button onClick={() => handleSetDecisionSourse('heart')}>Heart</button>
        <button onClick={() => handleSetDecisionSourse('head')}>Head</button>
        <button onClick={() => handleSetDecisionSourse('both')}>Both</button>
      </div>
    </main>
  )
}

export default Stage_7