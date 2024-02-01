import React from 'react';
import './Styles/Login.css';

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
                    <p className="title">Login</p>
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
  return (
    <div>

    </div>
  );
}

export { Login, Register };
