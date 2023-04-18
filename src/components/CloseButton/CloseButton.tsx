import CloseButtonImg from "../../assets/landing/close.png";
import "./styles.css";

function CloseButton() {
    return (
        <div className="close-button-component">
            <img src={CloseButtonImg} />
        </div>
    );
}

export default CloseButton;