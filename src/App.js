import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Notice from "./Pages/Notice";
import Main from "./Pages/Main";
import Home from "./Pages/Home";

import Login from "./Dashboard/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard/Dashboard";
import AddTeacher from "./Dashboard/AddTeacher";
import Student from "./Dashboard/Student";
import Six from "./Dashboard/Class/Six";
import Saven from "./Dashboard/Class/Saven";
import Eight from "./Dashboard/Class/Eight";
import Nine from "./Dashboard/Class/Nine";
import Ten from "./Dashboard/Class/Ten";
import Addnotice from "./Dashboard/AddNotice";
import AddNews from "./Dashboard/AddNews";
import AddInformation from "./Dashboard/AddInformation";

import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import More from "./Components/Notice/More";
import Principal from "./Pages/Principal";
import Welcome from "./Pages/Welcome";
import Latest from "./Pages/Latest";
import Recent from "./Pages/Recent";
import AddGallery from "./Dashboard/AddGallery";
import Rutine from "./Dashboard/Rutine";
import MoreRoute from "./MoreRoute";
import AdmitCart from "./Dashboard/AdmitCart";
import RequireAuth from "./Dashboard/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/student" element={<Students />}></Route>
          <Route path="/notice" element={<Notice />}></Route>


          {/* dashboard  */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route path="/admin/add-teacher" element={<AddTeacher />}></Route>
            <Route path="/admin/student" element={<Student />}></Route>
            <Route path="/admin/add-notice" element={<Addnotice />}></Route>
            <Route path="/admin/add-news" element={<AddNews />}></Route>
            <Route path="/admin/add-info" element={<AddInformation />}></Route>
            <Route path="/admin/student/class-six" element={<Six />}></Route>
            <Route path="/admin/student/class-saven" element={<Saven />}></Route>
            <Route path="/admin/student/class-eight" element={<Eight />}></Route>
            <Route path="/admin/student/class-nine" element={<Nine />}></Route>
            <Route path="/admin/student/class-ten" element={<Ten />}></Route>
            <Route path="/admin/add-gallery" element={<AddGallery />}></Route>
            <Route path="/admin/add-rutine" element={<Rutine />}></Route>
          </Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/more" element={<More />}></Route>
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/latest" element={<Latest />}></Route>
          {/* dashboard  */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="/admin/add-teacher" element={<AddTeacher />}></Route>
            <Route path="/admin/student" element={<Student />}></Route>
            <Route path="/admin/add-notice" element={<Addnotice />}></Route>
            <Route path="/admin/add-news" element={<AddNews />}></Route>
            <Route path="/admin/add-info" element={<AddInformation />}></Route>
            <Route path="/admin/adminCart" element={<AdmitCart />}></Route>
            <Route path="/admin/student/class-six" element={<Six />}></Route>
            <Route
              path="/admin/student/class-saven"
              element={<Saven />}
            ></Route>
            <Route
              path="/admin/student/class-eight"
              element={<Eight />}
            ></Route>
            <Route path="/admin/student/class-nine" element={<Nine />}></Route>
            <Route path="/admin/student/class-ten" element={<Ten />}></Route>
          </Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/more/:id" element={<More />}></Route>
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/latest/:id" element={<Latest />}></Route>
          <Route path="/recent" element={<Recent />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
