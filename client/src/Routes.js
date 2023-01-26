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
import Profile from './components/pages/Profile/Profile';

// styles
import './styles/global.scss'
import { UserContextProvider } from './context/userContext';

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
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  )
}

export default App
