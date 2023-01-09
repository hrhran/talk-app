import React from 'react'
import { Link } from 'react-router-dom'
import { APP_NAME } from '../../../config/Global.Constants';

import './Navigation.scss'

const Navigation = () => {
  return <nav className='navbar fullWidth'>
    <div className='navbar_icon'><Link to={'/'}>{APP_NAME}</Link></div>
    <div className='navbar_links'>
      <Link to={'/login'}>Login</Link>
    </div>
  </nav>
}

export default Navigation;