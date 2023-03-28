import React, {useState} from 'react'
import styles from './Stage_4.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_4: React.FC<Props> = ({nextStage, stage}) => {

/*   const zodiac = useState<string>('strelets')
  const gender = useState<string>('noone')
*/
  const handleGoNext = () => {
    nextStage(stage + 1)
  }

  return (
    <main>
      <h1 className={styles.heading}>So we can get to know you better, tell us about your relationship status.</h1>
      <div className={styles.buttons}>
        <button onClick={handleGoNext}>Single</button>
        <button onClick={handleGoNext}>In a relationship</button>
      </div>
    </main>
  )
}

export default Stage_4