import "./styles.css"

interface IProps {
    src: string
    title: string
    text: string
}

function MedicalCard({ src, text, title }: IProps) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={src} />

            </div>
            <div className="medical-date">
                <span className="medical-name">{title}</span>

                <span className="medical-specialization">{text}</span>
            </div>

            <div className="medical-code">
                <span>CRM: 6384519</span>
            </div>
        </div>
    );
}

export default MedicalCard;