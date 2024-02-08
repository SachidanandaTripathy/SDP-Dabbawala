import React, { useState } from 'react';
import './Styles/Login.css';
import './Styles/Register.css';

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
                    <p className="title">Login<hr /></p>
                    <div className="input-field">
                      <input required="" className="input" type="text" />
                      <label className="label" for="input">Enter Email</label>
                    </div>
                    <div className="input-field">
                      <input required="" className="input" type="password" />
                      <label className="label" for="input">Enter Password</label>
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

  const handleDabbaButton = () => {
    setDabbawalaform(true);
    setUserform(false);
    setManagerForm(false);
  }
  const handleMangerForm = () => {
    setManagerForm(true);
    setDabbawalaform(false);
    setUserform(false);
  }
  const handleUserform = () => {
    setManagerForm(false);
    setDabbawalaform(false);
    setUserform(true);
  }


  return (
    <div className="modal fade modal-lg" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="login">
              <div className="container">
                <div className='RegisterForm'>
                  <h3>Registration Form<hr /></h3>
                  <div class="roles">
                    <button onClick={handleUserform}>User</button>
                    <button onClick={handleDabbaButton}>Dabbawala</button>
                    <button onClick={handleMangerForm}>Manager</button>
                  </div>
                  {
                    userform &&
                    <form className="form">


                      <div className="flex">
                        <label>
                          <input className="input" type="text" placeholder="" required="" />
                          < span>first name</span>
                        </label>
                        <label>
                          <input className="input" type="text" placeholder="" required="" />
                          <span>last name</span>
                        </label>
                      </div>
                      <label>
                        <input className="input" placeholder="" type="tel" required="" />
                        <span>contact number</span>
                      </label>
                      <label>
                        <input className="input" placeholder="" type="text" required="" />
                        <span>password</span>
                      </label>
                      <label>
                        <input className="input" placeholder="" type="text" required="" />
                        <span>confirm password</span>
                      </label>

                      <button href="#" className="fancy">
                        <span className="top-key"></span>
                        <span className="text">submit</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                      </button>
                    </form>
                  }
                  {dabbawalaform && <form className="form">


                    <div className="flex">
                      <label>
                        <input className="input" type="text" placeholder="" required="" />
                        < span>first name</span>
                      </label>
                      <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>last name</span>
                      </label>
                    </div>
                    <label>
                      <input className="input" placeholder="" type="tel" required="" />
                      <span>contact number</span>
                    </label>
                    <label>
                      <input className="input" placeholder="" type="tel" required="" />
                      <span>Location</span>
                    </label>
                    <label>
                      <input className="input" placeholder="" type="text" required="" />
                      <span>password</span>
                    </label>
                    <label>
                      <input className="input" placeholder="" type="text" required="" />
                      <span>confirm password</span>
                    </label>

                    <button href="#" className="fancy">
            
                      <span className="text">submit</span>
                     
                    </button>
                  </form>}
                  {managerform && <form className="form">


                    <div className="flex">
                      <label>
                        <input className="input" type="text" placeholder="" required="" />
                        < span>first name</span>
                      </label>
                      <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>last name</span>
                      </label>
                    </div>
                    <label>
                      <input className="input" placeholder="" type="tel" required="" />
                      <span>contact number</span>
                    </label>
                    <label>
                      <input className="input" placeholder="" type="text" required="" />
                      <span>password</span>
                    </label>
                    <label>
                      <input className="input" placeholder="" type="text" required="" />
                      <span>confirm password</span>
                    </label>

                    <button href="#" className="fancy">
                      <span className="top-key"></span>
                      <span className="text">submit</span>
                      <span className="bottom-key-1"></span>
                      <span className="bottom-key-2"></span>
                    </button>
                  </form>}
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
