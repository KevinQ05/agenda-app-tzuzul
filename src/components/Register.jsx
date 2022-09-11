import React from "react";
import { useRef } from "react";

const Register = ({ setIsLogged }) => {
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const login = () => {
    setIsLogged(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
  };
  return (
    <>
      <h1>Register</h1>
      <form className="login-dock">
        <label htmlFor="name-field" className="email-field">
          Name:{" "}
        </label>

        <input
          ref={name}
          type="text"
          className="email-field-input"
          id="name-field"
        />
        <label htmlFor="email-field" className="email-field">
          Email:{" "}
        </label>

        <input
          ref={email}
          type="email"
          className="email-field-input"
          id="email-field"
        />
        <label htmlFor="password-field" className="password-field">
          Password:{" "}
        </label>
        <input
          ref={password}
          type="password"
          className="password-field-input"
          id="password-field"
        />
        <button
          className="btn login-btn"
          onClick={(event) => handleSubmit(event)}
          type="submit"
        >
          Log In
        </button>
        <button className="btn register-btn" onClick={() => login()}>
          Login
        </button>
      </form>
    </>
  );
};

export default Register;
