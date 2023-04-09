import Logo from "../../assets/img/static/logo.png"
import MenuIcon from "../../assets/img/static/menuIcon.png"
import MedicalImg from "../../assets/img/static/homeClientMedical.png"
import MedicalImgDesktop from "../../assets/img/static/homeClientMedicalDesktop.png"
import Body from "../../assets/img/static/bodyIcon.png"
import Heart from "../../assets/img/static/whiteHeartIcon.png"
import Dollar from "../../assets/img/static/dollarIcon.png"
import Medical from "../../assets/img/static/medicalIcon.png"
import MenuClose from "../../assets/img/static/menuClose.png"
import "./styles.css"
import Footer from "../../components/Footer/Footer"
import { Box } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"

function homeClient() {
    return (
        <>
            <div className="home-client-page">
                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='130px'
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "300px", lg: "400px" }}
                    height={{ sm: "430px", md: "500px" }}
                    top={{ sm: "140px", lg: "200px" }}
                    left={{ lg: "30px" }}
                    borderRadius="500px"
                />

                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur={{ sm: "120px" }}
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "205px", md: "300px" }}
                    height={{ sm: "200px" }}
                    top={{ sm: "0px", lg: "100px" }}
                    right={{ sm: "50px", xl: "200px" }}
                    borderRadius="500px"
                />

                <Box
                    boxSize='250px'
                    background={{ sm: "rgba(206, 176, 255, 1)", lg: "rgba(158, 99, 255, 1)" }}
                    filter='auto'
                    blur={{ sm: "25px", lg: "55px" }}
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "200px", lg: "300px" }}
                    height={{ sm: "200px", lg: "260px" }}
                    bottom={{ sm: "600px", lg: "90px", xl: "10px" }}
                    right={{ sm: "0px", lg: "180px", xl: "350px" }}
                />

                <Box
                    boxSize='250px'
                    background={{ sm: "rgba(255, 240, 210, 1)", lg: "rgba(173, 230, 255, 1)" }}
                    filter='auto'
                    blur={{ sm: "100px", lg: "100px" }}
                    position="absolute"
                    zIndex={3}
                    width={{ sm: "200px", lg: "500px", xl: "600px" }}
                    height={{ sm: "530px", lg: "290px" }}
                    bottom={{ sm: "-150px", xl: "220px" }}
                    left={{ xl: "80px" }}
                />

                <Box
                    boxSize='250px'
                    background={{ sm: "rgba(208, 255, 219, 1)", lg: "rgba(255, 240, 210, 1)" }}
                    filter='auto'
                    blur='70px'
                    position="absolute"
                    zIndex={{ sm: "3", lg: "4" }}
                    width={{ sm: "300px" }}
                    height={{ sm: "260px" }}
                    bottom={{ sm: "250px", lg: "-180", xl: "-190px" }}
                    right={{ sm: "0", lg: "10px", xl: "125px" }}
                    borderRadius="50px"
                />

                <Box
                    boxSize='250px'
                    background={{ sm: "rgba(203, 220, 244, 1)", lg: "rgba(255, 240, 210, 1)" }}
                    filter='auto'
                    blur={{ sm: "50px", lg: "100px" }}
                    position="absolute"
                    zIndex={{ sm: "2", lg: "3" }}
                    width={{ sm: "230px", lg: "300px" }}
                    height={{ sm: "260px", lg: "400px" }}
                    bottom={{ sm: "0", lg: "-260px", xl: "340px" }}
                    right={{ sm: "0", xl: "140px" }}
                    borderRadius="50px"
                />
                <nav>
                    <div className="home-client-logo">
                        <img src={Logo} />
                    </div>

                    <div className="home-client-menu">
                        <img src={MenuIcon} />
                    </div>
                    <div className="home-client-menu-desktop">
                        <p>Home</p>
                        <p>Agendamentos</p>
                        <p>Perfil</p>
                        <p>Pagamentos</p>
                        <p>Plano</p>

                        <img src={MenuClose} alt="" />
                    </div>
                </nav>

                <div className="home-client-historic">
                    <h1>Olá Dimitry!</h1>


                    <div className="home-client-historic-container">
                        <InfoIcon
                            color="rgba(158, 99, 255, 1)"
                        />

                        <p>Você ainda não preencheu seu histórico
                            <br />
                            <span>Clique aqui para preenche-lo!</span>
                        </p>


                    </div>
                </div>

                <div className="home-client-img-mobile">
                    <img src={MedicalImg} alt="" />
                </div>

                <div className="home-client-img-desktop">
                    <img src={MedicalImgDesktop} alt="" />
                </div>

                <div className="home-client-cards">
                    <div className="home-client-card-scheduling">
                        <div className="client-card-scheduling-container">

                            <h4>Agendamentos</h4>
                            <p>Neste página, você tem a possibilidade de marcar novas consultas e acompanhar as próximas agendadas.</p>

                        </div>

                        <img src={Medical} alt="" />
                    </div>

                    <div className="home-client-card-profile">
                        <img src={Body} alt="" />
                        <div className="client-card-profile-container">

                            <h4>Perfil</h4>
                            <p>Nesta página, você pode ver o histórico de suas consultas passadas, acessar suas informações pessoais, solicitar laudos médicos e estabelecer uma comunicação direta com seu médico.</p></div>
                    </div>

                    <div className="home-client-card-payment">
                        <div className="client-card-payment-container">

                            <h4>Pagamentos</h4>
                            <p>Nesta página, é possível visualizar o histórico dos seus pagamentos e verificar se eles foram aprovados.</p>
                        </div>

                        <img src={Dollar} alt="" />
                    </div>

                    <div className="home-client-card-plans">

                        <img src={Heart} alt="" />

                        <div className="client-card-plans-container">
                            <h4>Planos Médicos</h4>
                            <p>Nessa página, você poderá verificar as opções de planos médicos disponíveis e escolher aquela que mais atenda às suas necessidades.</p>
                        </div>
                    </div>
                </div>

                <div className="home-client-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default homeClient