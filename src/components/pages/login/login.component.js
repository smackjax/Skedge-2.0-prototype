import React from 'react';
import './login.css';
import logo from './logo.svg';

export default (props)=>{
    return (
    <div className="container">
        <div className="logo-wrap">
            <img src={logo} className="login-logo" alt="logo" />
        </div>

        <h2 className="form-signin-heading">Welcome!</h2>
        <h3>Please make an account</h3>

        
      <form className="form-signin">
        <div className="form-group">
            <label for="emailInput">Email address</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" />
            <small id="emailHelp" className="form-text text-muted">This is just a prototype. Your email is not stored outside your device.</small>
        </div>

        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        
        <div className="form-group">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password"/>
        </div>
        <button className="btn btn-lg btn-orange btn-block" type="submit">Create account</button>
      </form>

    </div>
    )
}
