import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function login(event) {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <div className="content">
      <h1>Login</h1>
      <Link to="/">To Home</Link>
      <form action="">
        <input ref={email} type="email" placeholder="email" />
        <input ref={password} type="password" placeholder="password" />
        <input type="submit" onClick={login} />
      </form>
    </div>
  );
}
