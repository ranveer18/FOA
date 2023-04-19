import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Logout from "./component/Logout";
import NotFound from "./pages/NotFound";
import UnpaidCourse from "./pages/UnpaidCourse";
import UploadCourse from "./pages/UploadCourse";
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
          <Route path="/freecourse" element={<UnpaidCourse />} />
          <Route path="/admin/uploadCourse" element={<UploadCourse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
