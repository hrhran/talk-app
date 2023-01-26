import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { UserContext } from '../../../context/userContext';
import { getItemFromLocalStorage } from '../../../helpers/globalHelpers';

const Profile = () => {

  useEffect(() => {
    const email = getItemFromLocalStorage('email');
    toast(`Welcome ${email}`)
  }, [])

  return <>
    main page
  </>
}

Profile.propTypes = {
  name: PropTypes.string
};

export default Profile;