import { CSSProperties } from "react";
import CardButton from "../CardButton/CardButton"
import "./styles.css"

interface IProps {
    style?: CSSProperties;
    styleTitle?: React.CSSProperties;
    styleText?: React.CSSProperties;
    styleButton?: React.CSSProperties;
    title: string;
    text: string;
}

function ServicesCard({ text, title, style, styleButton, styleText, styleTitle }: IProps) {
    return (
        <div className="services-card" style={style}>
            <div className="card-text">
                <h1 style={styleTitle}>
                    {title}
                </h1>

                <span className="" style={styleText}>
                    {text}
                </span>
            </div>

            <div className="card-button" style={styleButton}>
                <CardButton />
            </div>
        </div>
    );
}

export default ServicesCard;