import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Teachers from "./Pages/Teachers";
import Students from "./Pages/Students";
import Notice from "./Pages/Notice";
import Main from "./Pages/Main";
import Home from "./Pages/Home";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
