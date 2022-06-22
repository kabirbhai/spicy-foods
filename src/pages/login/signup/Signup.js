import React from "react";
import logo from "../../../images/logo2.png";

const Signup = () => {
  return (
    <section className="container">
      <div className="text-center my-5">
        <img height={100} src={logo} alt="" />
      </div>
      <div className="form-container border w-50 mx-auto shadow rounded ">
        <h1 className="text-center text-uppercase text-warning my-2">
          Please sign up
        </h1>
        <form className="px-4 pb-4">
          <div class="mb-3">
            <label for="signupName" class="form-label">
              Full Name
            </label>
            <input type="text" id="signupName" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="signupEmail" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="signupEmail" />
          </div>
          <div class="mb-3">
            <label for="signupPassword" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="signupPassword"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signupConfirmPassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="signupConfirmPassword"
              class="form-control"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Accept trams & condition
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
