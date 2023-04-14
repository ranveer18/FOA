import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Logout from "./component/Logout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
