import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default function LoginDock({ setIsLogged }) {
  const { login } = useAuthContext();
  const Register = () => {
    setIsLogged(false);
  };
  const email = useRef();
  const password = useRef();

  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await login(email, password);
    navigate("../", { replace: true });
  }
  return (
    <>
      <h1>Login</h1>
      <form className="login-dock">
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
        <button className="btn register-btn" onClick={() => Register()}>
          New here? Sign in!
        </button>
      </form>
    </>
  );
}
