import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Styles/Login.css';
import './Styles/Register.css';

function Login() {
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:12000/api/login', {
        contactNumber: contactNumber,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Login done successfully", { position: "bottom-right" });
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.info("Invalid credentials! Please try again", { position: "bottom-right" });
      } else if (error.response.status === 500) {
        toast.error("Internal server error. Please try again later", { position: "bottom-right" });
      }
    }
    setContactNumber('');
    setPassword('');
  };

  return (
    <div className="modal fade modal-lg" id="loginrModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="login">
              <div className="container">
                <div className="LoginForm">
                  <form className="form-control" onSubmit={handleLogin}>
                    <h2 className="title">Login<hr /></h2>
                    <div className="input-field">
                      <input
                        required
                        className="input"
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                      <label className="label" htmlFor="input">Enter Contact Number</label>
                    </div>
                    <div className="input-field">
                      <input
                        required
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="label" htmlFor="input">Enter Password</label>
                    </div>
                    <div>
                      <a href="/">Forgot your password?</a>
                    </div>
                    <button className="submit-btn" type="submit">Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Register() {
  const [userform, setUserform] = useState(true);
  const [dabbawalaform, setDabbawalaform] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    location: 'NA',
    password: '',
    confirmPassword: '',
    role: 'customer',
  });

  const [validationErrors, setValidationErrors] = useState({
    contactNumber: '',
    passwordMatch: '',
  });

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });

    if (field === 'contactNumber') {
      const isValidNumber = /^\d{10}$/.test(e.target.value);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        contactNumber: isValidNumber ? '' : 'Phone number should be 10 digits',
      }));
    }

    if (field === 'confirmPassword') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        passwordMatch:
          formData.password === e.target.value ? '' : 'Passwords do not match',
      }));
    }
  };

  const handleDabbaButton = () => {
    setDabbawalaform(true);
    setUserform(false);
    setFormData({ ...formData, role: 'Dabbawala' });
  };

  const handleUserform = () => {
    setUserform(true);
    setDabbawalaform(false);
    setFormData({ ...formData, role: 'customer', location: 'NA' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.contactNumber || validationErrors.passwordMatch) {
      toast.info('Validation not satisfied', { position: 'bottom-right' });
      return;
    }

    try {
      const apiUrl = 'http://localhost:12000/api/registration';
      const response = await axios.post(apiUrl, formData);
      if (response.status == 200) {
        toast.success("User Registration Done Successfully", { position: "bottom-right" });
      }

    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status == 400) {
          toast.info("User already exists! Try with a new phone number", { position: "bottom-right" });
        }
      } else if (error.request) {
        toast.error("No response from the server", { position: "bottom-right" });
      }
    }
  };

  return (
    <div className="modal fade modal-lg" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="login">
              <div className="container">
                <div className='RegisterForm'>
                  <h3>Registration Form<hr /></h3>
                  <div className="roles">
                    <button onClick={handleUserform}>User</button>
                    <button onClick={handleDabbaButton}>Dabbawala</button>
                  </div>
                  {
                    userform &&
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="flex">
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            onChange={(e) => handleInputChange(e, 'firstName')}
                            required
                          />
                          <span>first name</span>
                        </label>
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            onChange={(e) => handleInputChange(e, 'lastName')}
                            required
                          />
                          <span>last name</span>
                        </label>
                      </div>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          onChange={(e) => handleInputChange(e, 'contactNumber')}
                          required
                        />
                        <span>contactNumber</span>
                        <h6>{validationErrors.contactNumber}</h6>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          onChange={(e) => handleInputChange(e, 'password')}
                          required
                        />
                        <span>password</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          onChange={(e) => handleInputChange(e, 'confirmPassword')}
                          required
                        />
                        <span>Confirm password</span>
                        <h6>{validationErrors.passwordMatch}</h6>
                      </label>
                      <button type="submit" className="fancy">
                        <span className="text">submit</span>
                      </button>
                    </form>
                  }
                  {dabbawalaform &&
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="flex">
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            onChange={(e) => handleInputChange(e, 'firstName')}
                            required
                          />
                          <span>first name</span>
                        </label>
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            onChange={(e) => handleInputChange(e, 'lastName')}
                            required
                          />
                          <span>last name</span>
                        </label>
                      </div>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          onChange={(e) => handleInputChange(e, 'contactNumber')}
                          required
                        />
                        <span>contactNumber</span>
                        <h5>{validationErrors.contactNumber}</h5>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          onChange={(e) => handleInputChange(e, 'location')}
                          required
                        />
                        <span>Location</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          onChange={(e) => handleInputChange(e, 'password')}
                          required
                        />
                        <span>password</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          onChange={(e) => handleInputChange(e, 'confirmPassword')}
                          required
                        />
                        <span>confirm paasword</span>
                        <h6>{validationErrors.passwordMatch}</h6>
                      </label>
                      <button type="submit" className="fancy">
                        <span className="text">submit</span>
                      </button>
                    </form>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login, Register };
