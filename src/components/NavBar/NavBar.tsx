import { Button } from "@chakra-ui/react"
import { CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/static/logo.png"
import MenuIcon from "../../assets/img/static/menuIcon.png"
import "./styles.css"

function NavBar(props: {
    style?: CSSProperties
    text?: string
}) {

    const navigate = useNavigate()
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt=""
                />
            </div>

            <div className="nav-login-container">
                <Button
                    style={props.style ? props.style : { display: "flex" }}
                    onClick={() => navigate("/login")}
                    width={{ sm: "115px", md: "120px" }}
                    height="38px"
                    borderRadius="36px"
                    zIndex="2"
                    background="rgba(205, 206, 243, 1)"
                    color="rgba(158, 99, 255, 1)"
                    borderColor="rgba(95, 0, 189, 0.94) rgba(77, 0, 154, 0)"
                    border="1px"
                    cursor="pointer"
                    _hover={{ background: "rgba(205, 206, 243, 1)" }}

                >
                    LOGIN
                </Button>

                <img src={MenuIcon} alt="" />
            </div>

            <div className="nav-login-container-desktop">
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/doctors")}>Médicos</p>
                <p onClick={() => navigate("/services")}>Serviços</p>

                <Button
                    onClick={() => navigate('/login')}
                    width={{ sm: "115px", md: "120px" }}
                    height="38px"
                    borderRadius="36px"
                    background="rgba(205, 206, 243, 1)"
                    color="rgba(158, 99, 255, 1)"
                    borderColor="rgba(95, 0, 189, 0.94) rgba(77, 0, 154, 0)"
                    border="1px"
                    cursor="pointer"
                    _hover={{ background: "rgba(205, 206, 243, 1)" }}
                >
                    LOGIN
                </Button>
            </div>
        </nav >
    )
}

export default NavBar