import React from "react";
import "./styles.css"

function ServicesCard(props: {
    style?: React.CSSProperties;
}) {
    return (
        <>
            <div className="button-card">
                <span style={props.style}>FALE CONOSCO</span>
            </div>
        </>  
    );
}

export default ServicesCard;