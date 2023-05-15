import "./styles.css"
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import NavBarMed from "../../../components/NavBarMed/NavBarMed";
import MobileImage from "../../../assets/img/static/doctorHomeImageMobile.png"
import DesktopImage from "../../../assets/img/static/doctorHomeImageDesktop.png"
import Calendar from "../../../components/Calendar/Calendar";
import Footer from "../../../components/Footer/Footer";
import DoctorDays from "../../../components/DoctorDays/DoctorDays";

function DoctorHome() {
    return (
        <>
            <div className="doctor-home">
                <NavBarMed />

                <div className="doctor-home-img-container">
                    <img src={MobileImage} alt="" className="doctor-home-img-mobile" />
                    <img src={DesktopImage} alt="" className="doctor-home-img-desktop" />
                    <div className="doctor-home-welcome-card">
                        <h1>Olá Dra. Mariza!</h1>
                        <span>Você tem 5 consultas nessa semana.</span>
                        <a href="">Clique aqui para acessar a sua agenda.</a>
                    </div>
                    <p className="doctor-home-queries-text">Aqui estão suas consultas <br/> das próximas <span className="doctor-home-queries-text-white">2 semanas:</span></p>
                </div>

                <div className="doctor-home-calendar-container">
                    <Calendar />

                    <div className="doctor-home-calendar-days-container">
                        < DoctorDays />
                        < DoctorDays />
                        < DoctorDays />
                        < DoctorDays />
                        < DoctorDays />
                        < DoctorDays />
                        < DoctorDays />
                    </div>
                </div>

                <div className="doctor-home-data-container">
                    <div className="doctor-home-data">
                        <h1>11</h1>
                        <span>consultas </span> 
                        <span>agendadas</span>
                    </div>
                    <div className="doctor-home-data">
                        <h1>270</h1>
                        <span>medicamentos</span>
                        <span>em estoque</span>
                    </div>
                </div>

                <div className="doctor-home-blur">
                <Box
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur={{ sm: "150px", lg: "180px" }}
                        position="absolute"
                        zIndex={1}
                        width={{ sm: "300px", lg: "550px", xl: "750px" }}
                        height={{ sm: "400px", lg: "400px" }}
                        top="140px"
                        left={{ sm: "-50px", lg: "-50px" }}
                        borderRadius="500px"
                    />

                    <Box
                        boxSize='250px'
                        background="rgba(255, 240, 210, 1)"
                        filter='auto'
                        blur={{ sm: "70px", lg: "120px" }}
                        position="absolute"
                        zIndex={1.5}
                        width={{ sm: "300px", lg: "500px", xl: "750px" }}
                        height={{ sm: "400px", lg: "450px" }}
                        bottom="110px"
                        left={{ sm: "-20px", lg: "-20px" }}
                        borderRadius="500px"
                    />

                    <Box
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur={{ sm: "150px", lg: "200px" }}
                        position="relative"
                        zIndex={1}
                        width={{ sm: "300px", lg: "450px", xl: "750px" }}
                        height={{ sm: "300px", lg: "400px" }}
                        bottom="50px"
                        right={{ sm: "-150px", lg: "-600px", xl: "-900px" }}
                        borderRadius="500px"
                    />
                    
                </div>

                <Footer />

            

            </div>
        </>

    );
}

export default DoctorHome;