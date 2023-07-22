import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Notice from "./Pages/Notice";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import More from "./Components/Notice/More";
import Principal from "./Pages/Principal";
import Welcome from "./Pages/Welcome";
import Latest from "./Pages/Latest";
import Recent from "./Pages/Recent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/student" element={<Students />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/more" element={<More />}></Route>
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/latest" element={<Latest />}></Route>
          <Route path="/recent" element={<Recent />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
