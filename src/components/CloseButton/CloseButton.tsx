import React from "react"
import CloseButtonImg from "../../assets/img/static/closeButton.png"
import "./styles.css"

function CloseButton() {
    return (
        <>
            <div className="close-button-component">
                <img src={CloseButtonImg} />
            </div>
        </>
    )
}

export default CloseButton;