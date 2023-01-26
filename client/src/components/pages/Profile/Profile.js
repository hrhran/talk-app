import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { UserContext } from '../../../context/userContext';

const Profile = () => {
  const { userDetails } = useContext(UserContext);
  return <>
    Welcome {userDetails}
  </>
}

Profile.propTypes = {
  name: PropTypes.string
};

export default Profile;