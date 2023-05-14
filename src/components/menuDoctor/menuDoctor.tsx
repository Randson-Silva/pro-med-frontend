import { useState } from "react";
import menuClose from "../../assets/img/static/menuClose.png"
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/img/static/menuDoctorIcon.png"
import "./styles.css"

function menuDoctor() {
    const navigate = useNavigate()

    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

    return (
        <>
            <div className="open-menu-doctor">
                <img src={MenuIcon} onClick={showMenu} />
            </div>
            
            <div className={menu ? 'menu-doctor active' : 'menu-doctor'}>

                <img src={menuClose} onClick={showMenu} />

                <div className="menu-doctor-container">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/doctor/queries')}>Consultas</li>
                        <li onClick={() => navigate('/doctor/stock')}>Estoque</li>
                    </ul>
                </div>
            </div>


        </>
    );
}

export default menuDoctor;