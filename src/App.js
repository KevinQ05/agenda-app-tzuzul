import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import NavigationWrapper from "./components/NavigationWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NavigationWrapper />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
