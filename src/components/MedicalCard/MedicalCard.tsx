import "./styles.css"

function MedicalCard(props: {
    src: string
    title: string
    text: string
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