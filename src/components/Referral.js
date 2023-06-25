import React from 'react'
import { Link } from 'react-router-dom'
const Referral = () => {
  return (
    <div className='home'>
    <div className="referral-container referral-container-con">
        <h1 className='referral-title-name text-algin-center'>Referral</h1>
     <div className="container">
     <div className="referral-get-started-btn">
     <Link to='/referral-link' className='card-btn-item'>
        Get Started
        </Link>
     </div>
       </div>

 
    </div>
     </div>
  )
}

export default Referral