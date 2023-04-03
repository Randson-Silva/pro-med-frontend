import { Button } from "@chakra-ui/react"
import "./styles.css"

function PlansCard(props: {
    src: string
    title: string
    text: string
    value: string
}) {
    return (
        <>
            <div className="plans-card">
                <div className="plans-card-img">
                    <img src={props.src} />
                </div>

                <div className="plans-card-img-desktop">
                    <img src={props.src} />
                </div>

                <div className="plans-card-container">
                    <div className="plans-card-description">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>

                    </div>
                    <div className="plans-card-value">
                        <div className="plans-card-value-text">
                            <p>Tudo isso por</p>
                            <span>{props.value}</span>

                        </div>
                        <div className="plans-card-button">
                            <Button
                                width={{ sm: "165px", md: "180px", lg: "200px" }}
                                position="absolute"
                                bottom={{ sm: "0", lg: "-10px" }}
                                height={{ sm: "40px", lg: "50px" }}
                                background="#7B2FC6"
                                _hover={{ background: "#7B2FC6" }}
                                borderRadius="50px"
                                color="#C29DFF"
                            >
                                ASSINAR AGORA!
                            </Button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlansCard