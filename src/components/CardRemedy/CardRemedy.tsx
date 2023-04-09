import React from "react";
import "./styles.css";

function CardRemedy(props: {
    style?: React.CSSProperties;
    styleCircle: React.CSSProperties;
    image: string;
    remedyName: string;
    numberStock: string;
}) {
    return (
        <div className="card-remedy-component" style={props.style}>
            <img src={props.image} alt="" />
            <span>{props.remedyName}</span>
            <div className="card-remedy-circle" style={props.styleCircle}>{props.numberStock}</div>
        </div>
    );
}

export default CardRemedy;