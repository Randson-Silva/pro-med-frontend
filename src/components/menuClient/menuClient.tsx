import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/img/static/menuIcon.png"
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ProfileContext } from "../../context/ProfileContext";
import "./styles.css"

function menuClient() {
    const navigate = useNavigate()
    const { handleLogout } = useContext(ProfileContext);

    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

    return (
        <>
            <div className="open-menu-client">
                <img src={MenuIcon} onClick={showMenu} />
            </div>

            <div className={menu ? 'menu-client-component active' : 'menu-client-component'}>

                <div className="menu-client-container">
                    <ul>
                        <li onClick={() => navigate('/client/home')}>Home</li>
                        <li onClick={() => navigate('/client/scheduling')}>Agendamentos</li>
                        <li onClick={() => navigate('/client/profile')}>Perfil</li>
                        <li onClick={() => navigate('/client/payments')}>Pagamentos</li>
                        <li onClick={() => navigate('/client/plans')}>Planos</li>
                        <div className="meu-client-icon">
                            <ArrowRightIcon width={"13px"} color="rgba(158, 99, 255, 1)" />
                            
                            <li onClick={() => {
                                handleLogout();
                                navigate('/');
                            }}>
                                Sair
                            </li>
                        </div>
                    </ul>
                </div>
            </div>


        </>
    );
}

export default menuClient;