import ArrowLeft from "../../assets/img/static/arrowLeft.png"
import ArrowRight from "../../assets/img/static/arrowRight.png"

import "./styles.css"
import React from "react";

function specializationCardPurple(props: {
    title: string
    text: string
    src: string
}) {
    return (
        <>
            <div className="specialization-card-purple">

                <div className="purple-specialization-arrow-left">
                    <img src={ArrowLeft} alt="" />
                </div>

                <div className="purple-specialization-arrow-right">
                    <img src={ArrowRight} alt="" />
                </div>

                <div className="purple-specialization-icon">
                    < img src={props.src} />
                </div>

                <div className="purple-specialization-container">
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

export default specializationCardPurple;