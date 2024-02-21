import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from '../../AxiosInstance';
import './Styles/Profile.css';

function Profile() {
  const Auth = useAuth();
  const user = Auth.user;

  const [profileData, setProfileData] = useState(null);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (user) {
          const response = await axios.get('/api/profile', {
            params: {
              contactNumber: user.contactNumber,
            },
          });

          setVerify(response.data.verify);
          setProfileData(response.data);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [user]);

  return (
    <div>
      {!verify&&
        <div className='pending'>
            Your Verifcation is still pending!
        </div>
      }
      {verify && (
        <div>
          <p>Name: {profileData.firstName}</p>
       
        </div>
      )}
    </div>
  );
}

export default Profile;
