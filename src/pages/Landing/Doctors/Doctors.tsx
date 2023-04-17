import { Box } from '@chakra-ui/react';
import WhiteEllipseMobile from "../../../assets/landing/doctors/whiteEllipse.png";
import WhiteEllipseDesktop from "../../../assets/landing/doctors/whiteEllipseDesktop.png";
import FirstPurpleEllipse from "../../../assets/landing/doctors/firstPurpleEllipse.png";
import SecondPurpleEllipse from "../../../assets/landing/doctors/secondPurpleEllipse.png";
import ThirdPurpleEllipse from "../../../assets/landing/doctors/thirdPurpleEllipse.png";
import DoctorImg from "../../../assets/landing/doctors/doctor.png";
import LungIcon from "../../../assets/stickers/lungIcon.png";
import CrossIcon from "../../../assets/stickers/crossIcon.png";
import FirstAidIcon from "../../../assets/stickers/firstAidIcon.png";
import SkullIcon from "../../../assets/stickers/skullIcon.png";
import Thermometer from "../../../assets/stickers/thermometerIcon.png";
import MedicalCard from "../../../components/MedicalCard/MedicalCard";
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import "./styles.css";

function Doctors() {
    return (
        <div className="professional-page">
            <Box
                boxSize='250px'
                background="rgba(173, 230, 255, 1)"
                filter='auto'
                blur="120px"
                position="absolute"
                zIndex={0.5}
                width={{ sm: "200px", lg: "450px" }}
                height={{ sm: "200px", lg: "400px" }}
                top="-20px"
                right={{ sm: "50px", lg: "200px", xl: "240px" }}
                borderRadius="500px"
            />

            <Box
                boxSize='250px'
                background="rgba(173, 230, 255, 1)"
                filter='auto'
                blur='80px'
                position="absolute"
                zIndex={0.5}
                width={{ sm: "170px", lg: "400px" }}
                height={{ sm: "430px", md: "500px" }}
                top={{ sm: "400px", lg: "600px" }}
                left={{ lg: "0px" }}
                borderRadius="500px"
            />

            <Box
                boxSize='250px'
                background="rgba(208, 255, 219, 1)"
                filter='auto'
                blur="70px"
                position="absolute"
                zIndex={1}
                width={{ sm: "230px", lg: "450px" }}
                height={{ sm: "400px", lg: "260px", xl: "450px" }}
                bottom={{ sm: "400px", lg: "120px", xl: "400px" }}
                right={{ sm: "0px", lg: "180px", xl: "370px" }}
            />

            <Box
                boxSize='250px'
                background="rgba(255, 240, 210, 1)"
                filter='auto'
                blur="100px"
                position="absolute"
                zIndex={1}
                width={{ sm: "200px", lg: "500px", xl: "900px" }}
                height={{ sm: "530px", lg: "290px" }}
                bottom={{ sm: "0", xl: "300px" }}
                left={{ xl: "80px" }}
            />

            <NavBar />

            <div className="professional-components-container">
                <img src={WhiteEllipseMobile} alt="" className='professional-img' />
                <img src={WhiteEllipseDesktop} alt="" className='professional-img-2' />

                <div className="professional-frase">
                    <span className='simple-text'>Conheça nossos</span>

                    <div className="effect-text">
                        <span className='no-effect'>MÉDICOS</span>

                        <span className='border-effect'>MÉDICOS</span>
                    </div>
                </div>

                <img src={FirstPurpleEllipse} alt="" className='professional-purple-component' />
                <img src={SecondPurpleEllipse} alt="" className='rounded-rectangle-2' />
                <img src={SecondPurpleEllipse} alt="" className='rounded-rectangle-3' />
                <img src={ThirdPurpleEllipse} alt="" className='professional-purple-component-desktop' />
            </div>

            <img src={LungIcon} alt="" className='adesivo' />
            <img src={CrossIcon} alt="" className='adesivo-2' />

            <div className="card-container">
                <img src={FirstAidIcon} alt="" className='adesivo-3' />
                <img src={SkullIcon} alt="" className='adesivo-4' />
                <img src={Thermometer} alt="" className='adesivo-5' />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Dimitry Alves"
                    text="Cardiologista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Randson Silva"
                    text="Psiquiatra"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Rael Campos"
                    text="Neurologista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Luiz Henrique"
                    text="Ortopedista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Roger Gurgel"
                    text="Clinico Geral"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dra. Joana Becker"
                    text="Pediatra"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dra. Gerbenia Batista"
                    text="  Dermatologista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Felipe Garcia"
                    text="Dentista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dra. Isabelle Santos"
                    text="Fisioterapeuta"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dra. Carla Martin"
                    text="Ginecologista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dr. Raí Santos"
                    text="Cardiologista"
                />

                <MedicalCard
                    src={DoctorImg}
                    title="Dra. Fátima Bernardes"
                    text="Fisioterapeuta"
                />
            </div>

            <Footer />
        </div>
    );
}

export default Doctors;
