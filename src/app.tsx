import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing/Home/Home";
import Login from "./pages/Landing/Login/Login";
import Register from "./pages/Landing/Register/Register"
import HomeClient from "./pages/Client/homeClient/homeClient";
import Services from "./pages/Landing/Services/Services";
import PaymentPage from "./pages/Client/Payment/paymentPage";
import Professional from "./pages/Landing/professionalPage/professionalPage"
import Plans from "./pages/Client/Plans/plans";
import Profile from "./pages/Client/Profile/clientProfile";
import Stock from "./pages/Doctor/Stock/Stock";
import Scheduling from "./pages/Client/Scheduling/scheduling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Professional/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client/home" element={<HomeClient/>}/>
        <Route path="/client/profile" element={<Profile/>}/>
        <Route path="/client/payments" element={<PaymentPage/>}/>
        <Route path="/client/plans" element={<Plans/>}/>
        <Route path="/stock" element={<Stock/>}/>
        <Route path="/scheduling" element={<Scheduling/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
