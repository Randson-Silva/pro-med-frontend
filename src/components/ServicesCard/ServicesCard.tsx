import React from "react";
import "./styles.css"
import CardButton from "../CardButton/CardButton"

function ServicesCard(props: {
    style?: React.CSSProperties;
    styleTitle: React.CSSProperties;
    styleText: React.CSSProperties;
    styleButton: React.CSSProperties;
    title: string;
    text: string;
}) {
    return (
        <>
        
            <div className="services-card" style={props.style}>
                <div className="card-text">
                    <h1 style={props.styleTitle}>{props.title}</h1>
                    <span className="" style={props.styleText}>{props.text}</span>
                </div>

                <div className="card-button" style={props.styleButton}>
                    <CardButton />
                </div>
                
            </div>
        </>  
    );
}

export default ServicesCard;