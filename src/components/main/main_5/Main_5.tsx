import React from 'react'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { nanoid } from 'nanoid'

import { setIsParent } from "../../../store/actionCreators"

import styles from './Main_5.module.css';


type Props = {
  nextStage: (stage: number) => void
  stage: number
  status: string
}

const Stage_5: React.FC<Props> = ({nextStage, stage, status}) => {
  
  interface ButtonsType {
    text: string;
    value: boolean;
  }

  const buttons: ButtonsType[] = [
    { text: 'Yes', value: true },
    { text: 'No', value: false },
  ];

  const dispatch: Dispatch<any> = useDispatch()

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  const SettingIsParent = React.useCallback(
    (isParent: boolean) => dispatch(setIsParent(isParent)),
    [dispatch]
  )

  const handleSetIsParent = (isParent: boolean) => {
    SettingIsParent(isParent)
    handleGoNext()
  }

  const SettingIsSingleParent = React.useCallback(
    (isSingleParent: boolean) => dispatch(setIsParent(isSingleParent)),
    [dispatch]
  )

  const handleSetIsSingleParent = (isSingleParent: boolean) => {
    SettingIsSingleParent(isSingleParent)
    handleGoNext()
  }

  return (
    <main className={styles.main}>
      { status === 'single' && (
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a single parent?</h1>
            <div className={styles.buttons}>
              {
                buttons.map((item) => (
                  <button onClick={() => handleSetIsSingleParent(item.value)} key={nanoid()}>{item.text}</button>
                ))
              }
            </div>
          </div>)
      }
      { status === 'in a relationship' &&
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a parent?</h1>
            <div className={styles.buttons}>
              {
                buttons.map((item) => (
                  <button onClick={() => handleSetIsParent(item.value)} key={nanoid()}>{item.text}</button>
                ))
              }
            </div>
          </div>
      }

    </main>
  )
}

export default Stage_5