import LoginDock from "../components/LoginDock";
import Register from "../components/Register";

import { useState } from "react";

export default function Login() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div className="login-page">
      <section className="login-content">
        {isLogged ? (
          <LoginDock setIsLogged={setIsLogged} />
        ) : (
          <Register setIsLogged={setIsLogged} />
        )}
      </section>
    </div>
  );
}
