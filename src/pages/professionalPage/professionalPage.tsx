import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import "./styles.css";
import Professional from "./../../assets/img/static/professionalImgMobile.png"
import Professional2 from "./../../assets/img/static/professionalImgDesktop.png"
import Rectangle from "./../../assets/img/static/rectangle-1.png"
import Rectangle2 from "./../../assets/img/static/rectangle-2.png"
import Rectangle3 from "./../../assets/img/static/rectangle-3.png"
import Logo from "../../assets/img/static/logo.png"
import MenuIcon from "../../assets/img/static/menuIcon.png"
import MedicalCard from "../../components/MedicalCard/MedicalCard";
import Adesivo from "./../../assets/img/static/adesiveLung.png"
import Adesivo2 from "./../../assets/img/static/adesiveCross.png"
import Adesivo3 from "./../../assets/img/static/adesiveBand.png"
import Adesivo4 from "./../../assets/img/static/adesiveSkull.png"
import Adesivo5 from "./../../assets/img/static/adesiveThermometer.png"
import Footer from '../../components/Footer/Footer';
import ProfessionalImg from "../../assets/img/static/professionalImg.png"
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function ProfessionalPage() {

  const navigate = useNavigate()

  return (
    <>
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

          <img src={Professional} alt="" className='professional-img' />
          <img src={Professional2} alt="" className='professional-img-2' />

          <div className="professional-frase">
            <span className='simple-text'>Conheça nossos</span>
            <div className="effect-text">
              <span className='no-effect'>MÉDICOS</span>
              <span className='border-effect'>MÉDICOS</span>
            </div>
          </div>

          <img src={Rectangle} alt="" className='professional-purple-component' />
          <img src={Rectangle2} alt="" className='rounded-rectangle-2' />
          <img src={Rectangle2} alt="" className='rounded-rectangle-3' />
          <img src={Rectangle3} alt="" className='professional-purple-component-desktop' />
        </div>

        <img src={Adesivo} alt="" className='adesivo' />
        <img src={Adesivo2} alt="" className='adesivo-2' />


        <div className="card-container">


          <img src={Adesivo3} alt="" className='adesivo-3' />
          <img src={Adesivo4} alt="" className='adesivo-4' />
          <img src={Adesivo5} alt="" className='adesivo-5' />

          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Dimitry Alves"
            text="Cardiologista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Randson Silva"
            text="Psiquiatra"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Rael Campos"
            text="Neurologista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Luiz Henrique"
            text="Ortopedista"
          />

          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Roger Gurgel"
            text="Clinico Geral"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dra. Joana Becker"
            text="Pediatra"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dra. Gerbenia Batista"
            text="  Dermatologista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Felipe Garcia"
            text="Dentista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dra. Isabelle Santos"
            text="Fisioterapeuta"
          />

          <MedicalCard
            src={ProfessionalImg}
            title="Dra. Carla Martin"
            text="Ginecologista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dr. Raí Santos"
            text="Cardiologista"
          />
          <MedicalCard
            src={ProfessionalImg}
            title="Dra. Fátima Bernardes"
            text="Fisioterapeuta"
          />
        </div>

        <Footer />
      </div>

    </>
  );
}

export default ProfessionalPage;
