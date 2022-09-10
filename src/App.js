import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login/Login";
import NavigationWrapper from "./components/NavigationWrapper/NavigationWrapper";
import Nomatch from "./components/NoMatch/Nomatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NavigationWrapper />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  );
}

export default App;
