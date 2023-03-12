import "./styles.css"
import Teste from "./../../assets/img/static/cardImage.png"

function MedicalCard() {
    return (
        <>
        <div className="card">
            <div className="img-container">
                <img src={Teste} alt="" />
            </div>
            <div className="medical-date">
                <span className="medical-name">Dr. Lucas Silva</span>
                <span className="medical-specialization">Odontólogo</span>
            </div>

            <div className="medical-code">
                <span>CRM: 6384519</span>
            </div>
            
        </div>
        </>
    );
}

export default MedicalCard;