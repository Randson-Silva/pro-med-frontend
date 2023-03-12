import { Button, Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import "./styles.css";
import { MenuButton } from "@chakra-ui/react";
import MenuIcon from "../../assets/img/static/menuIcon.png"
import Logo from "../../assets/img/static/logo.png"
import ImageMobile from "../../assets/img/static/servicesImageMobile.png"
import ServicesCard from "../../components/ServicesCard/ServicesCard"


function Services() {

    return (
        <>
            <div className="services-page">
                <nav>
                    <img src={Logo} alt="" className="logo"/>

                    <div className="menu-login-container">
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

                        <img src={MenuIcon} alt="" className="menu-icon"/>
                    </div>
                </nav>

                <div className="title-page">
                    <span className="big-title">
                        SERVIÇOS
                    </span>
                    <span className="small-title">
                        disponíveis
                    </span>
                </div>

                <div className="services-components-container">
                    <img src={ImageMobile} alt="" className="services-image"/>
                    <div className="services-card-1">
                        <ServicesCard />
                    </div>
                    
                </div>
                
            </div>
        </>
    );
    
}

export default Services;