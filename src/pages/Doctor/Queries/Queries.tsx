import React, { useState } from "react";
import "./styles.css"
import NavBarMed from "../../../components/NavBarMed/NavBarMed";
import QueriesImgMobile from "../../../assets/img/static/queriesImageMobile.png"
import QueriesImgDesktop from "../../../assets/img/static/queriesImageDesktop.png"
import QueriesDate from "../../../components/QueriesDate/QueriesDate"
import QueriesComponent from "../../../components/QueriesComponent/QueriesComponent"
import Footer from "../../../components/Footer/Footer"
import { Box } from "@chakra-ui/react";

function Queries() {
    return (
        <>
            <div className="queries-page">
                <NavBarMed />

                <div className="queries-img-container">
                    <img src={QueriesImgMobile} alt="" className="queries-img-mobile"/>
                    <img src={QueriesImgDesktop} alt="" className="queries-img-desktop"/>
                    <div className="queries-title">
                        <p className="queries-small-title">Acompanhe suas</p>
                        <p className="queries-big-title">CONSULTAS</p>
                    </div>
                </div>

                <div className="queries-component-container">
                    <QueriesDate 
                        date="21/03"
                    />
                    <QueriesComponent 
                        patientName="Sílvio Henrique Gurgel Martins"
                        status="PACIENTE ATENDIDO"
                    />
                    <QueriesComponent
                        patientName="Luiz Henrique Nunes Sena"
                        status="PACIENTE ATENDIDO"
                    />
                    <QueriesComponent
                        patientName="Dimitry Alves"
                        status="1° Consulta - 14:00"
                    />
                    <QueriesDate 
                        date="20/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesDate 
                        date="19/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesDate 
                        date="18/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesDate 
                        date="17/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesDate 
                        date="16/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesDate 
                        date="15/03"
                    />
                    <QueriesComponent />
                    <QueriesComponent />
                    <QueriesComponent />
                </div>

                <div className="queries-blur">
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
    )
}

export default Queries;