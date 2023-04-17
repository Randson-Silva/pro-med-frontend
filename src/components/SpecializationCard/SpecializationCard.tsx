import { CSSProperties } from "react";
import ArrowLeft from "../../assets/landing/arrowLeft.png";
import ArrowRight from "../../assets/landing/arrowRight.png";
import "./styles.css";

interface IProps {
    title: string
    text: string
    src: string
    style?: CSSProperties
}

function SpecializationCard({ src, text, title, style }: IProps) {
    return (
        <div className="specialization-card">
            <div className="specialization-arrow-left">
                <img src={ArrowLeft} alt="" />
            </div>

            <div className="specialization-arrow-right">
                <img src={ArrowRight} alt="" />
            </div>

            <div className="specialization-icon">
                <img src={src} />
            </div>

            <div className="specialization-container">
                <h3 style={style ? style : { color: "rgba(95, 0, 189, 0.8)" }} >
                    {title}
                </h3>

                <p style={style ? style : { color: "rgba(158, 99, 255, 0.8)" }}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default SpecializationCard;