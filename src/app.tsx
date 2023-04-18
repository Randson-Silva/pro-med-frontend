import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing/Home/Home";
import Doctors from "./pages/Landing/Doctors/Doctors";
import Services from "./pages/Landing/Services/Services";
import Login from "./pages/Landing/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
