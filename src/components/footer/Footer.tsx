import React from 'react'
import styles from './Footer.module.css';

type IFooter = {
  stage: number
}

const Footer = ({stage}: IFooter) => {

  const darkTheme = stage === 3 || stage === 8
  const whiteTheme = stage === 2 || stage === 4 || stage === 5 || stage === 6 || stage === 7 || stage === 9 

  return (
    <footer className={styles.footer}>

      { stage === 1 && <div>
          <p>By continuing I agree with Privacy policy and Terms of use.</p>
          <p>ObrObrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012,</p>
          <p>Nicosia, Cyprus</p>
        </div>
      }
      {
        darkTheme && <div>
            <p style={{ color: '#CDCDCD'}}>Nicosia, Cyprus</p>
          </div>
      }
      {
        whiteTheme  && <div>
          <p>Nicosia, Cyprus</p>
        </div>
      }
    </footer>
  )
}

export default Footer
