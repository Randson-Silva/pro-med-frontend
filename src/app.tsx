import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import HomeClient from "./pages/homeClient/homeClient";
import ProfessionalPage from "./pages/professionalPage/professionalPage";
import Services from "./pages/Services/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-client" element={<HomeClient/>}/>
        <Route path="/professional-page" element={<ProfessionalPage/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;
