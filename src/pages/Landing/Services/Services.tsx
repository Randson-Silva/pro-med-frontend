import { Button, Box, Image } from "@chakra-ui/react";
import "./styles.css";
import ImageMobile from "../../../assets/img/static/servicesImageMobile.png"
import ImageDesktop from "../../../assets/img/static/servicesImageDesktop.png"
import RemedyAdesive from "../../../assets/img/static/adesiveRemedy.png"
import KeyAdesive from "../../../assets/img/static/adesiveKey.png"
import MicroscopicAdesive from "../../../assets/img/static/adesiveMicroscopic.png"
import ServicesCard from "../../../components/ServicesCard/ServicesCard"
import ServicesSmallCard from "../../../components/ServicesSmallCard/ServicesSmallCard"
import ServicesRectangleWhite from "../../../assets/img/static/servicesWhiteRectangle.png"
import ServicesRectangleBlue from "../../../assets/img/static/servicesBlueRectangle.png"
import Footer from "../../../components/Footer/Footer"
import NavBar from "../../../components/NavBar/NavBar"


function Services() {

    return (
        <>
            <div className="services-page">
                <NavBar />

                <div className="services-title-page">
                    <span className="services-big-title">
                        SERVIÇOS
                    </span>
                    <span className="services-small-title">
                        disponíveis
                    </span>
                </div>

                <div className="services-components-container">
                    <img src={ImageMobile} alt="" className="services-image-mobile"/>
                    <img src={ImageDesktop} alt="" className="services-image-desktop"/>
                    <div className="services-small-card">
                        <ServicesSmallCard
                            title="EXAMES LABORATORIAIS"
                            text="São testes que avaliam o estado de saúde geral do paciente, incluindo análises de sangue, urina e fezes."
                            
                        />
                    </div>

                    <div className="services-filter">
                        <Box
                            boxSize='250px'
                            background="rgba(173, 230, 255, 1)"
                            filter='auto'
                            blur={{ sm: "120px", lg: "200px" }}
                            position="absolute"
                            zIndex={1}
                            width={{ sm: "250px", lg: "450px", xl: "750px" }}
                            height={{ sm: "200px", lg: "400px" }}
                            top="-40px"
                            right={{ sm: "50px", lg: "200px", xl: "270px" }}
                            borderRadius="500px"
                        />

                        <Box
                            boxSize='250px'
                            background="rgba(173, 230, 255, 1)"
                            filter='auto'
                            blur={{ sm: "100px", lg: "150px" }}
                            position="absolute"
                            zIndex={1.7}
                            width={{ sm: "300px", lg: "450px" }}
                            height={{ sm: "300px", lg: "400px" }}
                            top={{ sm: "250px", lg: "350px", xl: "1300px" }}
                            left={{ sm: "-50px", lg: "0px", xl: "1000px" }}
                            borderRadius="500px"
                        />

                        <Box
                            boxSize='250px'
                            background="rgba(208, 255, 219, 1)"
                            filter='auto'
                            blur={{ sm: "200px", lg: "80px" }}
                            position="absolute"
                            zIndex={1.7}
                            width={{ sm: "300px", lg: "0px" }}
                            height={{ sm: "300px", lg: "0px" }}
                            top="450px"
                            right={{ sm: "-50px", lg: "200px", xl: "240px" }}
                            borderRadius="500px"
                        />

                        <Box
                            boxSize='250px'
                            background="rgba(255, 240, 210, 1)"
                            filter='auto'
                            blur={{ sm: "60px", lg: "80px" }}
                            position="absolute"
                            zIndex={1.7}
                            width={{ sm: "300px", lg: "0px", xl: "400px" }}
                            height={{ sm: "300px", lg: "0px", xl: "400px" }}
                            bottom="-820px"
                            left={{ sm: "-50px", lg: "200px", xl: "240px" }}
                            borderRadius="500px"
                        />
                    </div>

                    
                </div>

                <img src={ServicesRectangleWhite} alt="" className="services-rectangle-white"/>
                <img src={ServicesRectangleBlue} alt="" className="services-rectangle-blue"/>

                <img src={RemedyAdesive} alt="" className="services-remedy-adesive"/>
                <img src={KeyAdesive} alt="" className="services-key-adesive"/>
                <img src={MicroscopicAdesive} alt="" className="services-microscopic-adesive"/>

                <div className="services-card-container-mobile">
                    <ServicesCard
                        title="RADIOLOGIA"
                        text="São exames de imagem, como raio-x, tomografia e ressonância magnética, que ajudam a visualizar a estrutura interna do corpo para avaliar a presença de lesões ou problemas."
                        styleButton={{marginTop: 10}}
                    />
                    <ServicesCard 
                        title="TERAPIA"
                        text="São tratamentos que visam recuperar funções corporais, como a fisioterapia que ajuda na reabilitação de lesões musculares e articulares, ou a terapia ocupacional que ajuda na reabilitação de pacientes com problemas neurológicos."
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard 
                        title="EMERGÊNCIAS MÉDICAS"
                        text="São tratamentos que visam recuperar funções corporais, como a fisioterapia que ajuda na reabilitação de lesões musculares e articulares, ou a terapia ocupacional que ajuda na reabilitação de pacientes com problemas neurológicos."
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard
                        title="VACINAÇÃO"
                        text="São injeções que visam prevenir doenças infecciosas e imunizar o paciente."
                        styleButton={{display: "none"}}
                    />
                </div>


                <div className="services-card-container-desktop">
                    <ServicesCard
                        title=""
                        text=""
                        style={{backgroundColor: "rgb(0, 0, 0, 0)", border: "rgba(0, 0, 0, 0) 0.5px solid"}}
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard
                        title="EXAMES LABORATORIAIS"
                        text="São testes que avaliam o estado de saúde geral do paciente, incluindo análises de sangue, urina e fezes."
                        styleButton={{marginTop: 10}}
                    />
                    <ServicesCard
                        title=""
                        text=""
                        style={{backgroundColor: "rgb(0, 0, 0, 0)", border: "rgba(0, 0, 0, 0) 0.5px solid"}}
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard
                        title="RADIOLOGIA"
                        text="São exames de imagem, como raio-x, tomografia e ressonância magnética, que ajudam a visualizar a estrutura interna do corpo para avaliar a presença de lesões ou problemas."
                        styleButton={{marginTop: 0}}
                    />
                    <ServicesCard
                        title="CIRURGIAS AMBULATORIAS"
                        text="São cirurgias realizadas no mesmo dia da consulta, sem necessidade de internação hospitalar."
                        styleButton={{marginTop: 20}}
                    />
                    <ServicesCard
                        title="TERAPIAS"
                        text="São tratamentos que visam recuperar funções corporais, como a fisioterapia que ajuda na reabilitação de lesões musculares e articulares, ou a terapia ocupacional que ajuda na reabilitação de pacientes com problemas neurológicos."
                        styleButton={{marginTop: -10}}
                    />
                    <ServicesCard
                        title="EMERGÊNCIAS MÉDICAS"
                        text="São serviços de emergência disponibilizados pela clínica que visam atender pacientes com condições graves que necessitam de atendimento imediato."
                        styleButton={{marginTop: 0}}
                    />
                    <ServicesCard
                        title="VACINAÇÃO"
                        text="São injeções que visam prevenir doenças infecciosas e imunizar o paciente."
                        styleButton={{marginTop: 20}}
                    />
                    
                </div>

                <div className="services-card-container-desktop-1280">
                    <ServicesCard
                        title=""
                        text=""
                        style={{backgroundColor: "rgb(0, 0, 0, 0)", border: "rgba(0, 0, 0, 0) 0.5px solid"}}
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard
                        title="EXAMES LABORATORIAIS"
                        text="São testes que avaliam o estado de saúde geral do paciente, incluindo análises de sangue, urina e fezes."
                        styleButton={{marginTop: 40}}
                    />
                    <ServicesCard
                        title=""
                        text=""
                        style={{backgroundColor: "rgb(0, 0, 0, 0)", border: "rgba(0, 0, 0, 0) 0.5px solid"}}
                        styleButton={{display: "none"}}
                    />
                    <ServicesCard
                        title="RADIOLOGIA"
                        text="São exames de imagem, como raio-x, tomografia e ressonância magnética, que ajudam a visualizar a estrutura interna do corpo para avaliar a presença de lesões ou problemas."
                        styleButton={{marginTop: 0}}
                    />
                    <ServicesCard
                        title="CIRURGIAS AMBULATORIAS"
                        text="São cirurgias realizadas no mesmo dia da consulta, sem necessidade de internação hospitalar."
                        styleButton={{marginTop: 40}}
                    />
                    <ServicesCard
                        title="TERAPIAS"
                        text="São tratamentos que visam recuperar funções corporais, como a fisioterapia que ajuda na reabilitação de lesões musculares e articulares, ou a terapia ocupacional que ajuda na reabilitação de pacientes com problemas neurológicos."
                        styleButton={{marginTop: -20}}
                    />
                    <ServicesCard
                        title="EMERGÊNCIAS MÉDICAS"
                        text="São serviços de emergência disponibilizados pela clínica que visam atender pacientes com condições graves que necessitam de atendimento imediato."
                        styleButton={{marginTop: 20}}
                    />
                    <ServicesCard
                        title="VACINAÇÃO"
                        text="São injeções que visam prevenir doenças infecciosas e imunizar o paciente."
                        styleButton={{marginTop: 60}}
                    />
                    
                </div>

                
                <Footer />
                
            </div>
        </>
    );
    
}

export default Services;