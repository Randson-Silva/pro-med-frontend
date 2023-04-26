import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/static/logo.png"
import MenuIcon from "../../assets/img/static/menuIcon.png"
import "./styles.css"
import IconOut from "../../assets/img/static/iconOut.png"

function NavBarMed() {

    const navigate = useNavigate()
    return (
        <nav>
            <div className="nav-med-logo-container">
                <img src={Logo} alt=""
                />
            </div>

            <div className="nav-med-login-container">
                
            </div>

            <div className="nav-med-login-container-desktop">
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/queries")}>Consultas</p>
                <p onClick={() => navigate("/stock")}>Estoque</p>

                <img src={IconOut} alt="" className="nav-med-out"/>
            </div>
        </nav >
    )
}

export default NavBarMed