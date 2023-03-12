import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react"
import MedicalCard from "./components/MedicalCard/MedicalCard";
import ProfessionalSection from "./pages/ProfessionalSection/ProfessionalSection";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ServicesCard from "./components/ServicesCard/ServicesCard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServicesCard />} />
      </Routes>
    </Router>
  );
}

export default App;
