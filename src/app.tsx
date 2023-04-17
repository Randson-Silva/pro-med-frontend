import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing/Home/Home";
import Login from "./pages/Landing/Login/Login";
import Register from "./pages/Landing/Register/Register"
import HomeClient from "./pages/Client/homeClient/homeClient";
import Services from "./pages/Landing/Services/Services";
import PaymentPage from "./pages/Client/Payment/paymentPage";
import Professional from "./pages/Landing/professionalPage/professionalPage"
import Plans from "./pages/Client/Plans/plans";
import Profile from "./pages/Client/Profile/clientProfile"
import Scheduling from "./pages/Client/Scheduling/scheduling";
import NewMedicine from "./pages/Adm/newMedicine/newMedicine";
import Calendar from "./components/Calendar/Calendar";
import Stock from "./pages/Doctor/Stock/Stock";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-client" element={<HomeClient/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/stock" element={<Stock/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/professional" element={<Professional/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/scheduling" element={<Scheduling/>}/>
        <Route path="/new-medicine" element={<NewMedicine/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
