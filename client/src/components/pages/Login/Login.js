import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// hooks
import { useFetch } from '../../../hooks/useFetch'

import { urls } from '../../../api/urls'

import { APP_NAME } from '../../../config/Global.Constants'

const Login = () => {

  const navigate = useNavigate()

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const changeHandler = event => {
    const { name, value } = event.target;

    setLoginFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const loginChangeHandler = (e) => {
    e.preventDefault()
    const [data] = useFetch(loginFormData, urls.loginUser, 'post');
    data.then(data => console.log(data)).then(() => navigate('/profile')).catch(err => console.log(err));
  }

  return <>
    <form method='post' onSubmit={loginChangeHandler}>
      <label htmlFor="email"> Email
        <input type="text" id="email" name="email" minLength="10" maxLength="50" required onChange={changeHandler}></input>
      </label>
      <label htmlFor="password"> Password
        <input type="password" id="password" name="password" minLength="4" maxLength="20" required onChange={changeHandler}></input>
      </label>
      <button>Submit</button>
      <Link to={'/signup'}>Create {APP_NAME} account?</Link>
    </form>
  </>
}

export default Login