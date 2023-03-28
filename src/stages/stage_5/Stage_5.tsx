import React, {useState} from 'react'
import styles from './Stage_5.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
  variant: string
}

const Stage_5: React.FC<Props> = ({nextStage, stage, variant}) => {



/*   const zodiac = useState<string>('strelets')
  const gender = useState<string>('noone')
*/

  const handleGoNext = () => {
    nextStage(stage + 1)
  } 

  return (
    <main>
      {
        variant === 'parent' 
        ?
          // in figma it part in the bottom
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a single parent?</h1>
            <div className={styles.buttons}>
              <button onClick={handleGoNext}>Yes</button>
              <button onClick={handleGoNext}>No</button>
            </div>
          </div>
        :
          // in figma it part in the top
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Are you a parent?</h1>
            <div className={styles.buttons}>
              <button onClick={handleGoNext}>Yes</button>
              <button onClick={handleGoNext}>No</button>
            </div>
          </div>
      }

    </main>
  )
}

export default Stage_5