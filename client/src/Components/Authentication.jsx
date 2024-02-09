import React, { useState } from 'react';
import { toast } from "react-toastify";
import './Styles/Login.css';
import './Styles/Register.css';
import axios from 'axios';

function Login() {
  return (
    <div className="modal fade modal-lg" id="loginrModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="login">
              <div className="container">
                <div className="LoginForm">
                  <form className="form-control" action="">
                    <h2 className="title">Login<hr /></h2>
                    <div className="input-field">
                      <input required="" className="input" type="text" />
                      <label className="label" htmlFor="input">Enter Email</label>
                    </div>
                    <div className="input-field">
                      <input required="" className="input" type="password" />
                      <label className="label" htmlFor="input">Enter Password</label>
                    </div>
                    <a>Forgot your password?</a>
                    <button className="submit-btn">Sign In</button>
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
  const [managerform, setManagerForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    location: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleDabbaButton = () => {
    setDabbawalaform(true);
    setUserform(false);
    setManagerForm(false);
  };

  const handleMangerForm = () => {
    setManagerForm(true);
    setDabbawalaform(false);
    setUserform(false);
  };

  const handleUserform = () => {
    setManagerForm(false);
    setDabbawalaform(false);
    setUserform(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://localhost:12000/api/dabbawalaRoutes';
      const response = await axios.post(apiUrl, formData);
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Registration Done Successfully", { position: "bottom-right" });
      } else {
        toast.info("Error submitting form:", response.statusText, { position: "bottom-right" });
      }
    } catch (error) {
      toast.error(error.message)
      console.error(error.message, { position: "bottom-right" });
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
                    <button onClick={handleMangerForm}>Manager</button>
                  </div>
                  {/* {
                    userform&&
                    <form className="form">
                      <div className="flex">
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            required
                            onChange={(e) => handleInputChange(e, 'firstName')}
                          />
                          <span>first name</span>
                        </label>
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            required
                            onChange={(e) => handleInputChange(e, 'lastName')}
                          />
                          <span>last name</span>
                        </label>
                      </div>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          required
                          onChange={(e) => handleInputChange(e, 'contactNumber')}
                        />
                        <span>contact number</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          required
                          onChange={(e) => handleInputChange(e, 'password')}
                        />
                        <span>password</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          required
                          onChange={(e) => handleInputChange(e, 'confirmPassword')}
                        />
                        <span>confirm password</span>
                      </label>
                      <button type="button" onClick={handleSubmit} className="fancy">
                        <span className="text">submit</span>
                      </button>
                    </form>
                  } */}
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
                        <span>contact number</span>
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
                        <span>confirm password</span>
                      </label>
                      <button type="submit" className="fancy">
                        <span className="text">submit</span>
                      </button>
                    </form>
                  }
                  {/* {
                    managerform&&
                    <form className="form">
                      <div className="flex">
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            required=""
                            onChange={(e) => handleInputChange(e, 'firstName')}
                          />
                          <span>first name</span>
                        </label>
                        <label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                            required=""
                            onChange={(e) => handleInputChange(e, 'lastName')}
                          />
                          <span>last name</span>
                        </label>
                      </div>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          required=""
                          onChange={(e) => handleInputChange(e, 'contactNumber')}
                        />
                        <span>contact number</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="tel"
                          required=""
                          onChange={(e) => handleInputChange(e, 'location')}
                        />
                        <span>Location</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          required=""
                          onChange={(e) => handleInputChange(e, 'password')}
                        />
                        <span>password</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          placeholder=""
                          type="password"
                          required=""
                          onChange={(e) => handleInputChange(e, 'confirmPassword')}
                        />
                        <span>confirm password</span>
                      </label>
                      <button type="button" onClick={handleSubmit} className="fancy">
                        <span className="text">submit</span>
                      </button>
                    </form>
                  } */}
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
