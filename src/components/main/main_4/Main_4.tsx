import React from 'react'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { nanoid } from 'nanoid'

import { setRelationshipStatus } from "../../../store/actionCreators"

import styles from './Main_4.module.css';


type Props = {
  nextStage: (stage: number) => void
  stage: number
}


const Stage_4: React.FC<Props> = ({nextStage, stage}) => {

  const dispatch: Dispatch<any> = useDispatch()

  interface ButtonsType {
    text: string;
    value: 'single' | 'in a relationship';
  }

  const buttons: ButtonsType[] = [
    { text: 'Single', value: 'single' },
    { text: 'In a relationship', value: 'in a relationship' },
  ];

  const handleGoNext = () => {
    nextStage(stage + 1)
  }

  const SettingRelationshipStatus = React.useCallback(
    (status: 'single' | 'in a relationship') => dispatch(setRelationshipStatus(status)),
    [dispatch]
  )

  const handleSetRelationshipStatus = (status: 'single' | 'in a relationship') => {
    SettingRelationshipStatus(status)
    handleGoNext()
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>So we can get to know you better, tell us about your relationship status.</h1>
      <div className={styles.buttons}>
        {
          buttons.map((item) => (
            <button onClick={() => handleSetRelationshipStatus(item.value)} key={nanoid()}>{item.text}</button>
          ))
        }
      </div>
    </main>
  )
}

export default Stage_4