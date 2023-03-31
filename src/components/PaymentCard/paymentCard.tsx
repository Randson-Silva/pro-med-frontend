import { CSSProperties } from "@emotion/serialize"
import "./styles.css"

function paymentCard(props: {
    consult?: string
    profession?: string
    value?: string
}) {
    return (
        <>
            <div className="payment-card">
                <div className="payment-card-text">
                    <p>{props.consult}</p>
                    <span>- </span>
                    <p> {props.profession}</p>
                </div>

                <div className="payment-card-value">
                    <p>{props.value}</p>
                </div>
            </div>
        </>
    )
}

export default paymentCard