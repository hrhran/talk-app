import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// hooks
import { useFetch } from '../../../hooks/useFetch'

import { urls } from '../../../api/urls'

import { APP_NAME } from '../../../config/Global.Constants'

// styles
import './Login.scss';
import { UserContext } from '../../../context/userContext'

const Login = () => {

  const { getUser } = useContext(UserContext);

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
    data.then(res => getUser(res)).then(() => {
      navigate(`/profile`)
    }).catch(err => console.error(err));
  }

  return <div className='login_page'>
    <form method='post' onSubmit={loginChangeHandler}>
      {/* <label htmlFor="email"> Email */}
      <input
        type="text"
        id="email"
        name="email"
        minLength="10"
        maxLength="50"
        placeholder="email"
        required
        onChange={changeHandler}
      ></input>
      {/* </label> */}
      {/* <label htmlFor="password"> Password */}
      <input
        type="password"
        id="password"
        name="password"
        minLength="4"
        maxLength="20"
        placeholder="password"
        required
        onChange={changeHandler}
      ></input>
      {/* </label> */}
      <button>Submit</button>
      <Link to={'/signup'}>Create {APP_NAME} account?</Link>
    </form>
  </div>
}

export default Login