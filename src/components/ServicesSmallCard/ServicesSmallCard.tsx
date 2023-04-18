import CardButton from "../CardButton/CardButton"
import "./styles.css"

interface IProps {
    title: string;
    text: string;
}

function ServicesSmallCard({ text, title }: IProps) {
    return (
        <div className="services-small-card-component">
            <div className="card-small-text">
                <h1>{title}</h1>

                <span>{text}</span>
            </div>

            <div className="card-small-button">
                <CardButton />
            </div>
        </div>
    );
}

export default ServicesSmallCard;