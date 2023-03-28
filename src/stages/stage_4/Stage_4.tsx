import React, {useState} from 'react'
import styles from './Stage_4.module.css';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { setRelationshipStatus } from "../../store/actionCreators"

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_4: React.FC<Props> = ({nextStage, stage}) => {

/*   const zodiac = useState<string>('strelets')
  const gender = useState<string>('noone')
*/
const dispatch: Dispatch<any> = useDispatch()

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
    <main>
      <h1 className={styles.heading}>So we can get to know you better, tell us about your relationship status.</h1>
      <div className={styles.buttons}>
        <button onClick={() => handleSetRelationshipStatus('single')}>Single</button>
        <button onClick={() => handleSetRelationshipStatus('in a relationship')}>In a relationship</button>
      </div>
    </main>
  )
}

export default Stage_4