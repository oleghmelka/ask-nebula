import React, {useState} from 'react'
import styles from './Stage_7.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
  variant: string
}

const Stage_7: React.FC<Props> = ({nextStage, stage, variant}) => {



/*   const zodiac = useState<string>('strelets')
  const gender = useState<string>('noone')
*/

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  return (
    <main>
      <h1 className={styles.heading}>Do you make decisions with your head or your heart?</h1>
      <div className={styles.buttons}>
        <button onClick={handleGoNext}>Heart</button>
        <button onClick={handleGoNext}>Head</button>
        <button onClick={handleGoNext}>Both</button>
      </div>
    </main>
  )
}

export default Stage_7