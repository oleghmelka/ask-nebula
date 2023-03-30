import React from 'react'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { nanoid } from 'nanoid'

import { setDecisionSourse, CombinedType } from "../../../store/actionCreators"

import styles from './Main_7.module.css';


type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_7: React.FC<Props> = ({nextStage, stage}) => {

  interface ButtonsType {
    text: string;
    value: 'heart' | 'head' | 'both';
  }

  const buttons: ButtonsType[] = [
    { text: 'Heart', value: 'heart' },
    { text: 'Head', value: 'head' },
    { text: 'Both', value: 'both' },
  ];

  const dispatch: Dispatch<CombinedType> = useDispatch()

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
    <main className={styles.main}>
      <h1 className={styles.heading}>Do you make decisions with your head or your heart?</h1>
      <div className={styles.buttons}>
        {
          buttons.map((item) => (
            <button onClick={() => handleSetDecisionSourse(item.value)} key={nanoid()}>{item.text}</button>
          ))
        }
      </div>
    </main>
  )
}

export default Stage_7