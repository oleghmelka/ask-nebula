import React from 'react'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.png'
import styles from './Header.module.css';

type HeaderType = {
  stage: number
  previousStage: (stage: number) => void
}

const Header = ({stage, previousStage}: HeaderType) => {
  
  const handleGoBack = () => {
    previousStage(stage - 1)
  }

  return (
    <header className={styles.header}>
      { stage === 1 
      ?       
        null
      : 
      <div className={styles.arrowWrapper}>
        <img src={arrow} className={styles.arrow} onClick={handleGoBack} />
      </div> 
    }

      <div className={styles.logoWrapper}>
        <img src={logo} className={styles.logo} />
      </div>
    </header>
  )
}

export default Header