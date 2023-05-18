import Logo from "../../assets/img/static/logo.png";
import MenuIcon from "../../assets/img/static/menuIcon.png";
import { useNavigate } from "react-router-dom";
import './styles.css';
import MenuClient from "../menuClient/menuClient"

function NavBarClient() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-client-logo">
                <img src={Logo} />
            </div>

            <div className="nav-client-menu">
                <MenuClient/>
            </div>
            <div className="nav-client-menu-desktop">
                <p onClick={() => navigate('/client/home')}>
                    Home
                </p>
                <p onClick={() => navigate('/client/scheduling')}>
                    Agendamentos
                </p>
                <p onClick={() => navigate('/client/profile')}>
                    Perfil
                </p>
                <p onClick={() => navigate('/client/payments')}>
                    Pagamentos
                </p>
                <p onClick={() => navigate('/client/plans')}>
                    Plano
                </p>

            </div>
        </nav>
    );
}

export default NavBarClient;