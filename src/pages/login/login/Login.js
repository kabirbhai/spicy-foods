import React from "react";
import logo from "../../../images/logo2.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    console.log("After login", user);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="container">
      <div className="text-center my-5">
        <img height={100} src={logo} alt="" />
      </div>
      <div className="form-container border w-50 mx-auto shadow rounded ">
        <h1 className="text-center text-uppercase text-warning my-2">
          Please Login
        </h1>
        <form onSubmit={handleLogin} className="px-4 pb-4">
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="signupEmail"
              required
              placeholder="Your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="signupPassword"
              name="password"
              className="form-control"
              required
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
