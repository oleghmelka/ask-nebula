import React from 'react'

import styles from './Header.module.css';

import logo from '../../assets/logo.png'
import logo_white from '../../assets/logo.png' // it is impossible to download from Figma in png or jpg format, only in zip
import arrow from '../../assets/arrow.png'
import arrow_white from '../../assets/arrow.png' // it is impossible to download from Figma in png or jpg format, only in zip


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
        { stage === 3 || stage === 8 
        ?
          <img src={arrow_white} className={styles.arrow} onClick={handleGoBack} />
        :
          <img src={arrow} className={styles.arrow} onClick={handleGoBack} />
        }
      </div> 
    }

      <div className={styles.logoWrapper}>
        { stage === 3 || stage === 8 
        ?
          <img src={logo_white} className={styles.logo} />
        :
          <img src={logo} className={styles.logo} />
        }
      </div>
    </header>
  )
}

export default Header