import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Teachers from "./Pages/Teachers";
import Notice from "./Pages/Notice";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Login from "./Dashboard/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard/Dashboard";
import AddTeacher from "./Dashboard/AddTeacher";
import Student from "./Dashboard/Student";
import Addnotice from "./Dashboard/AddNotice";
import AddNews from "./Dashboard/AddNews";
import AddInformation from "./Dashboard/AddInformation";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import More from "./Components/Notice/More";
import Principal from "./Pages/Principal";
import Welcome from "./Pages/Welcome";
import Latest from "./Pages/Latest";
import AddGallery from "./Dashboard/AddGallery";
import Rutine from "./Dashboard/Rutine";
import AdmitCart from "./Dashboard/AdmitCart";
// import RequireAuth from "./Dashboard/RequireAuth";
import Routine from "./Pages/Routine";
import SingleTeacher from "./Pages/SingleTeacher";
import Result from "./Pages/Result";
import StudentCabinet from "./Dashboard/StudentCabinet";
import SMC from "./Dashboard/SMC";
import Recent from "./Components/Home/Recent";
import Institute from "./Dashboard/Institute";
import SingleStudent from "./Dashboard/SingleStudent";
import FamilyIncome from "./Dashboard/FamilyIncome";
import Religion from "./Dashboard/Religion";
import StudentCategory from "./Dashboard/StudentCategory";
import FaildStidennt from "./Dashboard/FaildStidennt";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/teacher/:id" element={<SingleTeacher />}></Route>
          <Route path="/smc" element={<SMC />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/more" element={<More />}></Route>
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/latest" element={<Latest />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/more/:id" element={<More />}></Route>
          <Route path="/latest/:id" element={<Latest />}></Route>
          <Route path="/recent" element={<Recent />}></Route>
          <Route path="/routine" element={<Routine />}></Route>

          {/* dashboard  */}
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/admin"
            element={
              // <RequireAuth>
              <Dashboard />
              // </RequireAuth>
            }
          >
            <Route path="/admin/add-teacher" element={<AddTeacher />}></Route>
            <Route path="/admin/student" element={<Student />}></Route>
            <Route path="/admin/add-notice" element={<Addnotice />}></Route>
            <Route path="/admin/add-news" element={<AddNews />}></Route>
            <Route path="/admin/add-info" element={<AddInformation />}></Route>
            <Route path="/admin/institute" element={<Institute />}></Route>

            <Route
              path="/admin/student/:id"
              element={<SingleStudent />}
            ></Route>
            <Route
              path="/admin/studentCabinet"
              element={<StudentCabinet />}
            ></Route>
            <Route path="/admin/smc" element={<SMC />}></Route>

            <Route
              path="/admin/student/religion"
              element={<Religion />}
            ></Route>

            <Route
              path="/admin/student/familyIncome"
              element={<FamilyIncome />}
            ></Route>
            <Route
              path="/admin/student/failed"
              element={<FaildStidennt />}
            ></Route>
            <Route
              path="/admin/student/studentCategory"
              element={<StudentCategory />}
            ></Route>
            <Route path="/admin/add-gallery" element={<AddGallery />}></Route>
            <Route path="/admin/add-rutine" element={<Rutine />}></Route>
            <Route path="/admin/admincart" element={<AdmitCart />}></Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
