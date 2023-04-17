import Logo from "../../assets/img/static/logo.png";
import MenuIcon from "../../assets/img/static/menuIcon.png";
import MenuClose from "../../assets/img/static/menuClose.png";
import { useNavigate } from "react-router-dom";
import './styles.css';

function NavBarClient() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-client-logo">
                <img src={Logo} />
            </div>

            <div className="nav-client-menu">
                <img src={MenuIcon} />
            </div>
            <div className="nav-client-menu-desktop">
                <p onClick={() => navigate('/client/home')}>
                    Home
                </p>
                <p onClick={() => navigate('/client/home')}>
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

                <img src={MenuClose} alt="" />
            </div>
        </nav>
    );
}

export default NavBarClient;