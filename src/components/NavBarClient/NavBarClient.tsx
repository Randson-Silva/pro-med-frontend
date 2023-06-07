import { useContext } from "react";
import Logo from "../../assets/img/static/logo.png";
import { useNavigate } from "react-router-dom";
import MenuClient from "../menuClient/menuClient"
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ProfileContext } from "../../context/ProfileContext";
import './styles.css';

function NavBarClient() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(ProfileContext);

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
                <div className="meu-client-icon">
                    <p onClick={handleLogout}>
                        Sair
                    </p>

                    <ArrowRightIcon width={"13px"} color="rgba(158, 99, 255, 1)" />
                </div>
            </div>
        </nav>
    );
}

export default NavBarClient;