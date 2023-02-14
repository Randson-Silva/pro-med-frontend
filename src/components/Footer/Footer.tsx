import React from "react";
import "./styles.css"
import Icon from "../../assets/img/static/localizationIcon.png"

function Footer() {
    return (
        <footer>
            <img src={Icon} alt="" />
            <p>Rua dos Coqueiros, 798 - Jardim das Flores - São Paulo - SP</p>
        </footer>
    );
}

export default Footer;