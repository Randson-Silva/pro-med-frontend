import { CSSProperties } from "react";
import ArrowLeft from "../../assets/img/static/arrowLeft.png"
import ArrowRight from "../../assets/img/static/arrowRight.png"
import "./styles.css"

function SpecializationCard(props: {
    title: string
    text: string
    src: string
    style?: CSSProperties
}) {
    return (
        <div className="specialization-card">
            <div className="specialization-arrow-left">
                <img src={ArrowLeft} alt="" />
            </div>

            <div className="specialization-arrow-right">
                <img src={ArrowRight} alt="" />
            </div>

            <div className="specialization-icon">
                <img src={props.src} />
            </div>

            <div className="specialization-container">
                <h3 style={props.style ? props.style : { color: "rgba(95, 0, 189, 0.8)" }} >
                    {props.title}
                </h3>

                <p style={props.style ? props.style : { color: "rgba(158, 99, 255, 0.8)" }}>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default SpecializationCard;