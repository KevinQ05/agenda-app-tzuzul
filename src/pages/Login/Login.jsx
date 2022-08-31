import "./Login.scss";
import { Link } from "react-router-dom";
import LoginDock from "../../components/LoginDock/LoginDock";

export default function Login() {
  function login(event, email, password) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <div className="login-page">
      <section className="login-content">
        <h1>Login</h1>
        <Link to="/">To Home</Link>
        <LoginDock onClick={login} />
      </section>
    </div>
  );
}
