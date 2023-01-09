import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { urls } from '../../../api/urls';
import { useFetch } from '../../../hooks/useFetch';

const SignUp = () => {

  const navigate = useNavigate()

  const [signupFormData, setSignupFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const changeHandler = event => {
    const { name, value } = event.target;

    setSignupFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const signUpChangeHandler = e => {
    e.preventDefault();
    const [data] = useFetch(signupFormData, urls.createUser, 'post');
    data.then(data => console.log(data)).then(() => navigate('/login')).catch(err => console.log(err));
  }


  return <>
    <form method='post' onSubmit={signUpChangeHandler}>
      <label htmlFor="name"> username
        <input type="text" id="username" name="username" minLength="4" maxLength="50" required onChange={changeHandler}></input>
      </label>
      <label htmlFor="email"> Email
        <input type="text" id="email" name="email" minLength="10" maxLength="50" required onChange={changeHandler}></input>
      </label>
      <label htmlFor="password"> Password
        <input type="password" id="password" name="password" minLength="4" maxLength="20" required onChange={changeHandler}></input>
      </label>
      <button>Submit</button>
      <Link to={'/login'}>Login account?</Link>
    </form>
  </>
}

export default SignUp