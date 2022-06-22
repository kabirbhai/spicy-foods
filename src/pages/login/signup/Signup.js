import React, { useState } from "react";
import logo from "../../../images/logo2.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {} from "firebase/auth";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (user) {
    console.log("user", user);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({
        displayName: name,
        photoURL: "https://i.ibb.co/SvtVPnR/spanner-33816-1280.jpg",
      });
    }
    console.log(name, email, password, confirmPassword);
  };

  return (
    <section className="container">
      <div className="text-center my-5">
        <img height={100} src={logo} alt="" />
      </div>
      <div className="form-container border w-50 mx-auto shadow rounded ">
        <h1 className="text-center text-uppercase text-warning my-2">
          Please sign up
        </h1>
        <form onSubmit={handleSignup} className="px-4 pb-4">
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="signupName"
              className="form-control"
              required
            />
          </div>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="signupConfirmPassword"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Accept our trams & condition
            </label>
          </div>
          <button disabled={!agree} type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
