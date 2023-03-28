import React from 'react'
import styles from './Footer.module.css';

type IFooter = {
  stage: number
}

const Footer = ({stage}: IFooter) => {

  return (
    <footer className={styles.footer}>
      { stage === 1 
      ? 
        <div>
         <p>By continuing I agree with Privacy policy and Terms of use.</p>
         <p>ObrObrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012,</p>
         <p>Nicosia, Cyprus</p>
        </div>
      : 
        <p>Nicosia, Cyprus</p> 
      }
    </footer>
  )
}

export default Footer