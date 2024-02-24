import React, { useState, useEffect } from 'react';
import axios from '../../AxiosInstance';
import './Styles/Request.css';

function Request() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Request'>
      <h1>Requests</h1>
      {/* <p>Number of Requests: {requests.length}</p> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Location</th>
            <th scope="col">Verifcation</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td>{request.firstName}</td>
              <td>{request.lastName}</td>
              <td>{request.contactNumber}</td>
              <td>{request.location}</td>
              <td>
                <button className='Accept-button'>
                  <i class="fa-solid fa-check"></i> Accept
                </button>
                <button className='nav-button'>
                  <i class="fa-solid fa-xmark"></i> Rejected
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Request;
