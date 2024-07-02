import React from 'react'
import Phone from '../assets/vector4.svg'
import Mail from '../assets/vector2.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'
import classNames from 'classnames';
import styles from './TopContact.module.css'

function TopContact() {
  return (
    <div className={classNames(styles.top )}>
        <div className={classNames("container" ,styles.top )}>
            <div className={classNames("row","py-2" )}>
            <div className="col-md-3 d-flex justify-content-center">
                <img src={Phone} className ="me-2" />
                +1234567834343</div>
            <div className="col-md-3" >
                <img src={Mail} className ="me-2" />Info@reactTheme.com
            </div>
            <div className="col-md-3" ></div>
            <div className="col-md-3 d-flex justify-content-end" >
                <img src={Facebook} className ="mx-2" />
                <img src={Twitter} className ="mx-2" />
                <img src={Linkedin} className ="mx-2" />
            </div>
        </div>

        </div>
     
    </div>
  )
}

export default TopContact
