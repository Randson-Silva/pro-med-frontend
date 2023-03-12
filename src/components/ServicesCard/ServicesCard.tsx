import React from "react";
import "./styles.css"

function ServicesCard() {
    return (
        <>
            <div className="services-card">
                <div className="card-text">
                    <h1>EXAMES LABORATORIAIS</h1>
                    <span>São testes que avaliam o estado de saúde geral do paciente, incluindo análises de sangue, urina e fezes.</span>
                </div>
                <span className="card-button">FALE CONOSCO</span>
            </div>
        </>  
    );
}

export default ServicesCard;