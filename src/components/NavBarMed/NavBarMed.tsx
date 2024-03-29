import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/static/logo.png"
import "./styles.css"
import IconOut from "../../assets/img/static/iconOut.png"
import Menu from "../menuDoctor/menuDoctor"

function NavBarMed() {

    const navigate = useNavigate()
    return (
        <nav>
            <div className="nav-med-logo-container">
                <img src={Logo} alt=""
                />
            </div>

            <div className="nav-med-login-container">
                <Menu/>
            </div>

            <div className="nav-med-login-container-desktop">
                <p onClick={() => navigate("/doctor/home")}>Home</p>
                <p onClick={() => navigate("/doctor/queries")}>Consultas</p>
                <p onClick={() => navigate("/doctor/stock")}>Estoque</p>

                <img src={IconOut} alt="" className="nav-med-out"/>
            </div>
        </nav >
    )
}

export default NavBarMed