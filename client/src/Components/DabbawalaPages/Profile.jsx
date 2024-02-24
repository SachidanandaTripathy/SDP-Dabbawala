import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from '../../AxiosInstance';
import './Styles/Profile.css';
import logo from '../Styles/favicon.jpg'

function Profile() {
    const Auth = useAuth();
    const user = Auth.user;

    const [profileData, setProfileData] = useState(null);
    const [verify, setVerify] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleEditToggle = () => {
      setEditing(!editing);
    };
  

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
            {!verify &&
                <div className='pending'>
                    Your Verifcation is still pending!
                </div>
            }
            {verify && (
                <>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="mb-0">Profile</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center mb-4">
                                            <img
                                                src={user.profileImage || logo}
                                                alt="Profile"
                                                className="img-fluid rounded-circle"
                                                style={{ width: '150px', height: '150px' }}
                                            />
                                        </div>
                                        <h4 className="card-title">
                                            {editing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={user.firstName}
                                                    onChange={(e) => console.log(e.target.value)} 
                                                />
                                            ) : (
                                                <input value={user.firstName}/>
                                                
                                            )}
                                            {editing && (
                                                <button className="btn btn-primary" onClick={handleEditToggle}>
                                                    Save
                                                </button>
                                            )}
                                            {!editing && (
                                                <button className="btn btn-secondary" onClick={handleEditToggle}>
                                                    Edit
                                                </button>
                                            )}
                                        </h4>
                                        <p className="card-text">
                                            {editing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={user.email}
                                                    onChange={(e) => console.log(e.target.value)} // Add logic to update user.email
                                                />
                                            ) : (
                                                `Email: ${user.email}`
                                            )}
                                            {editing && (
                                                <button className="btn btn-primary" onClick={handleEditToggle}>
                                                    Save
                                                </button>
                                            )}
                                            {!editing && (
                                                <button className="btn btn-secondary" onClick={handleEditToggle}>
                                                    Edit
                                                </button>
                                            )}
                                        </p>
                                        <p className="card-text">
                                            {editing ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={user.contactNumber}
                                                    onChange={(e) => console.log(e.target.value)} // Add logic to update user.contactNumber
                                                />
                                            ) : (
                                                `Contact Number: ${user.contactNumber}`
                                            )}
                                            {editing && (
                                                <button className="btn btn-primary" onClick={handleEditToggle}>
                                                    Save
                                                </button>
                                            )}
                                            {!editing && (
                                                <button className="btn btn-secondary" onClick={handleEditToggle}>
                                                    Edit
                                                </button>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}

export default Profile;
