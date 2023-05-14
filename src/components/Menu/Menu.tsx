import { useState } from "react";
import menuClose from "../../assets/img/static/menuClose.png"
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/img/static/menuIcon.png"
import "./styles.css"

function Menu() {
    const navigate = useNavigate()

    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

    return (
        <>
            <div className="open-menu">
                <img src={MenuIcon} onClick={showMenu} />
            </div>
            
            <div className={menu ? 'menu-component active' : 'menu-component'}>

                <img src={menuClose} onClick={showMenu} />

                <div className="menu-component-container">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/doctors')}>Médicos</li>
                        <li onClick={() => navigate('/services')}>Serviços</li>
                    </ul>
                </div>
            </div>


        </>
    );
}

export default Menu;