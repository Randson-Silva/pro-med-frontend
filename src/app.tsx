import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import HomeClient from "./pages/homeClient/homeClient";
import Services from "./pages/Services/Services";
import PaymentPage from "./pages/Payment/paymentPage";
import Professional from "./pages/professionalPage/professionalPage"
import Plans from "./pages/Plans/plans";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-client" element={<HomeClient/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/professional" element={<Professional/>}/>
        <Route path="/plans" element={<Plans/>}/>
      </Routes>
    </Router>
  );
}

export default App;
