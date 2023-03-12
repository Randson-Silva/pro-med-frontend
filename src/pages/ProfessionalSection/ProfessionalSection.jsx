import { Button } from '@chakra-ui/react';
import React from 'react';
import "./styles.css";
import Professional from "./../../assets/img/static/professionalImgMobile.png"
import Professional2 from "./../../assets/img/static/professionalImgDesktop.png"
import Rectangle from "./../../assets/img/static/rectangle-1.png"
import Rectangle2 from "./../../assets/img/static/rectangle-2.png"
import Rectangle3 from "./../../assets/img/static/rectangle-3.png"
import ProMedLogo from "../../assets/img/static/proMedLogo.png";
import MenuButton from "../../assets/img/static/menuButton.png";
import MedicalCard from "./../../components/MedicalCard/MedicalCard";
import Adesivo from "./../../assets/img/static/adesiveLung.png"
import Adesivo2 from "./../../assets/img/static/adesiveCross.png"
import Adesivo3 from "./../../assets/img/static/adesiveBand.png"
import Adesivo4 from "./../../assets/img/static/adesiveSkull.png"
import Adesivo5 from "./../../assets/img/static/adesiveThermometer.png"

function ProfessionalSection() {
  return (
    <>
    <div className="container-page">
    <div className="professional-page">
      <div className="head">
        <img src={ProMedLogo} alt="ProMed" className='promed-logo'/>

        <div className="menu-login-container">
          <img src={MenuButton} alt="" className='menu-button'/>
            <Button
              width={{ sm: "115px", md: "120px" }}
              height="38px"
              borderRadius="36px"
              background="rgba(205, 206, 243, 1)"
              color="rgba(158, 99, 255, 1)"
              borderColor="rgba(95, 0, 189, 0.94)
              rgba(77, 0, 154, 0)"
              border="1px"
              cursor="pointer"
            >
                            LOGIN
            </Button>
          <div className="menu-options">
            <span>Home</span>
            <span>Médicos</span>
            <span>Serviços</span>
          </div>
        </div>

      </div>

      <img src={Professional} alt="" className='professional-img' />
      <img src={Professional2} alt="" className='professional-img-2' />

        <div className="title-page">
          <span className='simple-text'>Conheça nossos</span>
          <div className="effect-text">
            <span className='no-effect'>MÉDICOS</span>
            <span className='border-effect'>MÉDICOS</span>
          </div>
        </div>

      <img src={Rectangle} alt="" className='rounded-rectangle' />
      <img src={Rectangle2} alt="" className='rounded-rectangle-2' />
      <img src={Rectangle2} alt="" className='rounded-rectangle-3' />
      <img src={Rectangle3} alt="" className='rounded-rectangle-4' />

      <img src={Adesivo} alt="" className='adesivo' />
      <img src={Adesivo2} alt="" className='adesivo-2' />
      <img src={Adesivo3} alt="" className='adesivo-3' />
      <img src={Adesivo4} alt="" className='adesivo-4' />
      <img src={Adesivo5} alt="" className='adesivo-5' />

      <div className="filter-blur-1"></div>
      <div className="filter-blur-2"></div>
      <div className="filter-blur-3"></div>
      <div className="filter-blur-4"></div>
      
      <div className="card-container">
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      <MedicalCard />
      </div>

      <div className="footer">
        <span>Rua dos Coqueiros, 798 - Jardim das Flores - São Paulo - SP</span>
      </div>
      
    </div>
    </div>
    
    </>
  );
}

export default ProfessionalSection;
