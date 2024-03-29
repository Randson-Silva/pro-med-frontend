import { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileContext";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PurpleComponentMobile from "../../../assets/img/static/purpleComponentMobile.png"
import PurpleComponentDesktop from "../../../assets/img/static/purpleComponentDesktop.png"
import MedicalComponentMobile from "../../../assets/img/static/medicalComponentMobile.png"
import MedicalComponentDesktop from "../../../assets/img/static/medicalComponentDesktop.png"
import HeartIcon from "../../../assets/img/static/heartIcon.png"
import BrainIcon from "../../../assets/img/static/brainIcon.png"
import BoneIcon from "../../../assets/img/static/boneIcon.png"
import ToothIcon from "../../../assets/img/static/toothIcon.png"
import ClinicIcon from "../../../assets/img/static/clinicIcon.png"
import Share from "../../../assets/img/static/share.png"
import FeedbackImage from "../../../assets/img/static/influencerImg.png"
import ChairIcon from "../../../assets/img/static/chairIcon.png"
import MascIcon from "../../../assets/img/static/mascIcon.png"
import BandAidIcon from "../../../assets/img/static/bandAidIcon.png"
import NurseIcon from "../../../assets/img/static/nurseIcon.png"
import Footer from "../../../components/Footer/Footer";
import SpecializationCard from "../../../components/SpecializationCard/SpacializationCard"
import "./styles.css"
import NavBar from "../../../components/NavBar/NavBar";

function Home() {
    const navigate = useNavigate()
    
    const { isAuthenticated, user } = useContext(ProfileContext);

    if (isAuthenticated) navigate(`/${user!.role.toLowerCase()}/home`);

    return (
        <div className="home-page">
            <NavBar />
            <div className="home-components-container">
                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur={{ sm: "120px", lg: "80px" }}
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "200px", lg: "450px" }}
                    height={{ sm: "200px", lg: "400px" }}
                    top="-20px"
                    right={{ sm: "50px", lg: "200px", xl: "240px" }}
                    borderRadius="500px"
                />

                <div className="home-purple-component-mobile">
                    <img src={PurpleComponentMobile} alt="" />
                </div>

                <div className="home-purple-component-desktop">
                    <img src={PurpleComponentDesktop} alt="" />
                </div>

                <div className="home-frase-container">
                    <p>Nós acreditamos na</p>
                    <h1>PREVENÇÃO</h1>
                    <span>você também?</span>
                </div>

                <div className="home-medical-component-mobile">
                    <img src={MedicalComponentMobile} alt="" />
                </div>

                <div className="home-medical-component-desktop">
                    <img src={MedicalComponentDesktop} alt="" />
                </div>

                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='80px'
                    position="relative"
                    width={{ sm: "165px", md: "300px", lg: "400px" }}
                    height={{ sm: "400px", md: "500px" }}
                    bottom={{ sm: "-300px", md: "-570px", lg: "700px" }}
                    transform=" rotate(44.29deg)"
                    borderRadius="500px"
                />

                <Box
                    boxSize='250px'
                    background="rgba(194, 157, 255, 0.6)"
                    filter='auto'
                    blur={{ sm: "50px", lg: "80px" }}
                    position="relative"
                    zIndex={-0.5}
                    width={{ sm: "250px", md: "300px", lg: "300px" }}
                    height={{ sm: "400px", md: "470px", lg: "1000px" }}
                    bottom={{ sm: "-170px", md: "-650px", lg: "1260px" }}
                    left={{ sm: "300px", lg: "640px", xl: "1000px" }}
                    transform={{ sm: "rotate(44.29deg)", lg: "rotate(-135.79deg)" }}
                    borderRadius={{ sm: "0", lg: "100px" }}
                />

                <Box
                    boxSize='250px'
                    background="rgba(255, 240, 210, 1)"
                    filter='auto'
                    blur='80px'
                    position="relative"
                    zIndex={0.5}
                    width={{ sm: "170px", md: "300px", lg: "500px" }}
                    height={{ sm: "400px", md: "500px" }}
                    bottom={{ sm: "-170px", md: "-400px", lg: "1250px" }}
                    borderRadius={{ sm: "500px", lg: "200px" }}
                />

                <Box
                    display={{ sm: "none", lg: "flex" }}
                    boxSize='250px'
                    background="rgba(203, 220, 244, 1)"
                    filter='auto'
                    blur={{ lg: "80px", xl: "100px" }}
                    position="absolute"
                    zIndex={-0.5}
                    width={{ lg: "200px" }}
                    height={{ lg: "300px" }}
                    bottom="0"
                    right={{ lg: "0px" }}
                    borderRadius="500px"
                />

            </div>

            <div className="home-schedule-button">
                <button onClick={() => navigate('/login')}>
                    AGENDE SUA CONSULTA
                </button>
            </div>

            <div className="home-text-container">
                <h2>
                    Algumas de nossas funcinalidades
                </h2>

            </div>

            <div className="home-specialization-card">

                <SpecializationCard
                    title="Cardiologia"
                    text="É a especialidade médica que se dedica ao estudo e tratamento do coração e dos vasos sanguíneos."
                    src={HeartIcon}
                />
            </div>

            <div className="home-specialization-card-desktop">
                <SpecializationCard
                    title="Cardiologia"
                    text="É a especialidade médica que se dedica ao estudo e tratamento do coração e dos vasos sanguíneos."
                    src={HeartIcon}
                />
                <SpecializationCard
                    style={{ color: "rgba(76, 169, 255, 0.8)" }}
                    title="Neorologia"
                    text="Especialidade médica que se dedica ao estudo e tratamento do sistema nervoso, incluindo o cérebro, medula espinhal e nervos periféricos."
                    src={BrainIcon}
                />
                <SpecializationCard
                    title="Ortopedia"
                    text="Especialidade médica que se dedica ao tratamento de lesões e doenças dos ossos, músculos e articulações."
                    src={BoneIcon}
                />
                <SpecializationCard
                    style={{ color: "rgba(76, 169, 255, 0.7)" }}
                    title="Odonotologia"
                    text="Especialidade médica que se dedica ao estudo, diagnóstico, prevenção e tratamento de doenças e problemas dentais."
                    src={ToothIcon}
                />
                <SpecializationCard
                    title="Clínica Geral"
                    text="Especialidade médica que fornece atenção básica e primária à saúde."
                    src={ClinicIcon}
                />
            </div>


            <div className="home-share">
                <img src={Share} alt="" />
            </div>

            <div className="home-information-card">
                <div className="home-information-card-container">

                    <Image src={ChairIcon}
                        width="100px"
                        position="absolute"
                        right={{ sm: "-5px", lg: "450px", xl: "550px" }}
                        zIndex="1"
                        top={{ sm: "-45px", lg: "-20px", xl: "4" }}
                    />

                    <Image src={MascIcon}
                        width="100px"
                        position="absolute"
                        left={{ sm: "0", lg: "-460px" }}
                        top={{ sm: "80px", lg: "230px" }}
                        zIndex="2"
                    />

                    <div className="home-information-card-img"> </div>
                    <div className="home-information-card-img-desktop"></div>

                    <p>A ProMed é uma clínica médica criada por um jovem médico, filho de uma família com uma tradição na medicina. Com o objetivo de oferecer atendimento médico de alta qualidade e personalizado, ele reuniu uma equipe de médicos especialistas. A clínica rapidamente se estabeleceu como uma das melhores na região, oferecendo soluções personalizadas para cada paciente. A ProMed é uma extensão da tradição familiar de cuidar da saúde das pessoas.</p>

                    <span>A ProMed nasceu de uma paixão e dedicação de gerações. A família por trás da clínica sempre teve uma tradição de cuidar da saúde e bem-estar das pessoas. Desde a avó que era parteira até o pai que era médico clínico geral, a dedicação à medicina corria nas veias da família.
                        <br />
                        <br />
                        Mas foi somente quando o jovem médico, filho da tradição familiar, decidiu abrir sua própria clínica que a ProMed foi fundada. Com um sonho de oferecer um atendimento médico de alta qualidade e personalizado para cada paciente, ele reuniu uma equipe de médicos dedicados e especialistas em diversas áreas da medicina.
                        <br />
                        <br />

                        E assim, a ProMed foi criada, com o objetivo de continuar a tradição familiar de cuidar da saúde das pessoas. Com um toque pessoal e uma equipe de médicos altamente capacitados, a clínica rapidamente se estabeleceu como uma das melhores na região, oferecendo atendimento de qualidade e soluções personalizadas para cada paciente.
                        <br />
                        <br />
                        A ProMed é mais do que uma clínica médica, é uma extensão da tradição familiar de cuidar da saúde e bem-estar das pessoas.</span>
                </div>
            </div>
            <div className="home-feedback">

                <h3>Feedback dos nossos pacientes</h3>
                <div className="home-feedback-includes">
                    <div className="home-feedback-container">

                        <h4>Ana Clara B. Moniz</h4>

                        <Image src={BandAidIcon}
                            width={{ sm: "70px", md: "80px", lg: "100px" }}
                            position="absolute"
                            bottom={{ sm: "135px", md: "170px" }}
                            right={{ sm: "-5px", lg: "-50px" }}
                            zIndex="2"
                        />

                        <Image src={NurseIcon}
                            width={{ sm: "70px", md: "80px", lg: "90px" }}
                            position="absolute"
                            bottom="-50px"
                            left={{ sm: "-20px", lg: "-20px" }}
                            zIndex="2"
                        />

                        <div className="home-feedback-card">
                            <p>
                                “Frequentei a clínica ProMed e posso dizer que foi uma experiência incrível. Desde o atendimento na recepção até o atendimento médico, tudo foi perfeito. A médica que me atendeu, foi muito profissional e atenciosa. Ela me deu todas as informações que eu precisava e me fez sentir em segurança durante todo o processo. A clínica possui equipamentos modernos e tecnologia avançada, o que tornou meu tratamento ainda mais eficaz.”
                            </p>

                            <img src={FeedbackImage} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;