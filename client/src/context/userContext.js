import React, { useState } from "react";
import PropTypes from 'prop-types';

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {

  const [userDetails, setUserDetails] = useState([])

  const getUser = (response) => {
    const { data } = response;
    setUserDetails(data.email);
  }

  const value = {
    userDetails,
    setUserDetails,
    getUser,
  }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

UserContextProvider.propTypes = {
  children: PropTypes.element,
};
