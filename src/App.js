import "./App.scss";
import { Routes, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import NavigationWrapper from "./components/NavigationWrapper/NavigationWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NavigationWrapper />}>
          <Route exact path="/" element={<Home />} />
          <Route path="dos" element={<>Pipi pupu check</>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
