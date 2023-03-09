import '../Footer/Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Homepage from '../../container/Homepage/Homepage'

const Footer = () => {

  return (
    <div className='Footer-main'>
      <div className="column1">
        <div className="clrw">
            <p className='
privacy policy'>holder</p>
            <p className='footertitle'>
privacy policy</p>
        </div>
        <div className="clrw">
            <p className='footertitle'>terms and conditions</p>
            <p className='footertitle'>returns and refund</p>
        </div>
        <div className="clrw">
            <p className='footertitle'>credit score guide</p>
        </div>
      </div>
      <div className="emailinputnbtn">
      
        <input className="emlinp" placeholder='Enter email for newsletters'></input>
        
        <button className='footerbtn'>submit</button>
      </div>

    <a className='up' href="#"><div className="icons">
        /^\
      </div></a>
    </div>
  )
}

export default Footer
