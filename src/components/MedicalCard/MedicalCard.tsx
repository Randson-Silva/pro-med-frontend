import "./styles.css"
import Teste from "./../../assets/img/static/cardImage.png"

function MedicalCard(props: {
    src: string
    text: string
    title: string

}) {
    return (
        <>
            <div className="card">
                <div className="img-container">
                    <img src={props.src} />
                </div>
                <div className="medical-date">
                    <span className="medical-name">{props.title}</span>
                    <span className="medical-specialization">{props.text}</span>
                </div>

                <div className="medical-code">
                    <span>CRM: 6384519</span>
                </div>

            </div>
        </>
    );
}

export default MedicalCard;