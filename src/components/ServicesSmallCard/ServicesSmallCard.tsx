import React from "react";
import "./styles.css"
import CardButton from "../CardButton/CardButton"

function ServicesSmallCard(props: {
    title: string;
    text: string;
}) {
    return (
        <>
            <div className="services-small-card-component">
                <div className="card-small-text">
                    <h1>{props.title}</h1>
                    <span>{props.text}</span>
                </div>

                <div className="card-small-button">
                    <CardButton />
                </div>
                
            </div>
        </>  
    );
}

export default ServicesSmallCard;