import "./LoginDock.scss";
import { useRef } from "react";

export default function LoginDock(props) {
  const email = useRef();
  const password = useRef();
  return (
    <>
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
          onClick={(event) =>
            props.onClick(event, email.current.value, password.current.value)
          }
        >
          Log In
        </button>
      </form>
    </>
  );
}
