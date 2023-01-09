import React from 'react'
import { Link } from 'react-router-dom'
import { APP_NAME } from '../../../config/Global.Constants'
import Navigation from '../../SubComponents/Navigation/Navigation'

import './welcomePage.scss'

const WelcomePage = () => {
  return <div className='welcome_page'>
    <Navigation />
    Welcome to {APP_NAME}
    <Link to={'/signup'}>Signup account?</Link>
  </div>
}

export default WelcomePage