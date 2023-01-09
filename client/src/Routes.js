import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// components
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/Signup/SignUp';

// styles
import './styles/global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
