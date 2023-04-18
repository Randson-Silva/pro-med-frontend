import { CSSProperties } from "react";
import "./styles.css";

interface IProps {
    style?: CSSProperties;
}

function ServicesCard({ style }: IProps) {
    return (
        <div className="button-card">
            <span style={style}>
                FALE CONOSCO
            </span>
        </div> 
    );
}

export default ServicesCard;