import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { UserContext } from '../../../context/userContext';
import { getItemFromLocalStorage } from '../../../helpers/globalHelpers';
import LeftPanel from '../../SubComponents/LeftPanel/Leftpanel';
import RightPanel from '../../SubComponents/RightPanel/RightPanel';

import './Profile.scss';

const Profile = () => {

  useEffect(() => {
    const email = getItemFromLocalStorage('email');
    toast(`Welcome ${email}`)
  }, [])

  return <div className='profile_page'>
    <LeftPanel />
    <RightPanel />
  </div>
}

Profile.propTypes = {
  name: PropTypes.string
};

export default Profile;