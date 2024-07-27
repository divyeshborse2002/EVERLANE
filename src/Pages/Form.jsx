import React, { useState } from 'react'

const Form = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <div className="container form-container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center">
                  {isLogin ? "Login" : "Register"}
                </h3>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <button className="btn btn-link w-100 mt-3" onClick={toggleForm}>
                  {isLogin
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const LoginForm = () => {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="loginEmail" required />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="loginPassword" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    );
  };
  
  const RegisterForm = () => {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="registerEmail" required />
        </div>
        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="registerPassword" required />
        </div>
        <div className="mb-3">
          <label htmlFor="registerConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="registerConfirmPassword" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    );
  };
  


export default Form
