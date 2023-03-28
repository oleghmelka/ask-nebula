import React, {useState} from 'react'
import styles from './Stage_3.module.css';

type Props = {
  nextStage: (stage: number) => void
  stage: number
}

const Stage_3: React.FC<Props> = ({nextStage, stage}) => {

  const zodiac = useState<string>('strelets')
  const gender = useState<string>('noone')

  const handleGoNext = () => {
    setTimeout(() => {
      nextStage(stage + 1)
    }, 2000)
  }

  handleGoNext()

  return (
    <main>
      <h1 className={styles.heading}>{`We've helped 2,865,756* other ${zodiac} ${gender} to find their perfect partner and we can't wait to help you too!`}</h1>
      <h5 className={styles.subheading}>*as of 24 February 2023</h5>
      <div className={styles.connecting}>
        Connecting to database...
      </div>
    </main>
  )
}

export default Stage_3