import "./Login.scss";
import LoginDock from "../../components/LoginDock/LoginDock";

export default function Login() {
  return (
    <div className="login-page">
      <section className="login-content">
        <h1>Login</h1>
        <LoginDock />
      </section>
    </div>
  );
}
