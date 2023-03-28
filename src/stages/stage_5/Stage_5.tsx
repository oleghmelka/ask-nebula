import React, {useState} from 'react'
import styles from './Stage_5.module.css';

import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { setIsParent, setIsSingleParent } from "../../store/actionCreators"

type Props = {
  nextStage: (stage: number) => void
  stage: number
  status: string
}

const Stage_5: React.FC<Props> = ({nextStage, stage, status}) => {

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
    <main>
      { status === 'single' && (
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a single parent?</h1>
            <div className={styles.buttons}>
              <button onClick={() => handleSetIsSingleParent(true)}>Yes</button>
              <button onClick={() => handleSetIsSingleParent(false)}>No</button>
            </div>
          </div>)
      }
      { status === 'in a relationship' &&
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a parent?</h1>
            <div className={styles.buttons}>
              <button onClick={() => handleSetIsParent(true)}>Yes</button>
              <button onClick={() => handleSetIsParent(false)}>No</button>
            </div>
          </div>
      }

    </main>
  )
}

export default Stage_5