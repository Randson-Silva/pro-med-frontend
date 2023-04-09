import { Button, Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./styles.css";
import { MenuButton } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import StockImageMobile from "../../assets/img/static/stockImageMobile.png"
import StockImageDesktop from "../../assets/img/static/stockImageDesktop.png"
import Logo from "../../assets/img/static/proMedLogo.png"
import Magnifier from "../../assets/img/static/magnifierImage.png"
import CardRemedy from "../../components/CardRemedy/CardRemedy"
import DipironaImage from "../../assets/img/static/dipironaImage.png"
import NavBarMed from "../../components/NavBarMed/NavBarMed";

function Stock() {
    return (
        <>
            <div className="stock-page">
                <div className="stock-navbar">
                    <NavBarMed />
                </div>
                
                
                <div className="stock-components-container">
                    <img src={StockImageMobile} alt="" className="stock-image-mobile"/>
                    <img src={StockImageDesktop} alt="" className="stock-image-desktop"/>

                    <div className="stock-title">
                        <div className="stock-task-text">Vai passar medicação?</div>
                        
                        <div className="stock-text-division">
                            <div className="stock-thin-text">Olha <br /> no</div>
                            <div className="stock-big-text">ESTOQUE</div>
                        </div>
                        
                     </div>

                    <div className="stock-input-container">
                        <input type="text" className="stock-input" placeholder="O que você está procurando?"/>
                        <img src={Magnifier} alt="" className="stock-input-magnifier"/>
                    </div>
                     
                </div>

                <div className="stock-card-container-mobile">
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Dipirona"
                        numberStock="52"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Paracetamol"
                        numberStock="27"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy 
                        style={{backgroundColor: "rgba(235, 235, 235, 0)", 
                        backdropFilter: "blur(0px)",
                        border: "none"
                        }}
                        styleCircle={{display: "none"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Amoxicilina"
                        numberStock="11"
                        style={{zIndex: "2"}}
                     />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Metformina"
                        numberStock="33"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Azitromicina"
                        numberStock="02"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Cefalexina"
                        numberStock="11"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Losartana"
                        numberStock="33"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Glibenclamida"
                        numberStock="02"
                        style={{zIndex: "2"}}
                    />
                </div>

                <div className="stock-card-container-desktop">
                <CardRemedy
                        image={DipironaImage}
                        remedyName="Dipirona"
                        numberStock="52"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Paracetamol"
                        numberStock="27"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy 
                        image={DipironaImage}
                        remedyName="Paracetamol"
                        numberStock="27"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Amoxicilina"
                        numberStock="11"
                        style={{zIndex: "2"}}
                     />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Metformina"
                        numberStock="33"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Azitromicina"
                        numberStock="02"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Cefalexina"
                        numberStock="11"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Losartana"
                        numberStock="33"
                        style={{zIndex: "2"}}
                    />
                    <CardRemedy
                        image={DipironaImage}
                        remedyName="Glibenclamida"
                        numberStock="02"
                        style={{zIndex: "2"}}
                    />
                </div>

                <div className="stock-blur">
                    <Box
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur={{ sm: "150px", lg: "180px" }}
                        position="absolute"
                        zIndex={1}
                        width={{ sm: "350px", lg: "550px", xl: "750px" }}
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
                        width={{ sm: "400px", lg: "500px", xl: "750px" }}
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

export default Stock