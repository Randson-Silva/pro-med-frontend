import ArrowLeft from "../../assets/img/static/arrowLeft.png"
import ArrowRight from "../../assets/img/static/arrowRight.png"

import "./styles.css"
import React from "react";

function specializationCardBlue(props: {
    title: string
    text: string
    src: string
}) {
    return (
        <>
            <div className="specialization-card-blue">

                <div className="blue-specialization-arrow-left">
                    <img src={ArrowLeft} alt="" />
                </div>

                <div className="blue-specialization-arrow-right">
                    <img src={ArrowRight} alt="" />
                </div>

                <div className="blue-specialization-icon">
                    < img src={props.src} />
                </div>

                <div className="blue-specialization-container">
                    <h3>
                        {props.title}
                    </h3>

                    <p>
                        {props.text}
                    </p>
                </div>

            </div>

        </>
    );
}

export default specializationCardBlue;