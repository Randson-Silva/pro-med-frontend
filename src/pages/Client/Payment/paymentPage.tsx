import "./styles.css"
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import PaymentCard from "../../../components/PaymentCard/paymentCard";
import MedicalPayment from "../../../assets/img/static/medicalPayment.png"
import { Box } from "@chakra-ui/react";

function paymentPage() {
    return (
        <>
            <div className="payment-page">
                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='90px'
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "100px", md: "200px" }}
                    height={{ sm: "300px", md: "350px" }}
                    top={{ sm: "190px" }}
                    borderRadius="500px"
                />
                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='90px'
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "230px", lg: "300px" }}
                    height={{ sm: "100px" }}
                    right={{ sm: "0", md: "50px", lg: "200px" }}
                    top={{ sm: "0" }}
                    borderRadius="500px"
                />

                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='90px'
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "105px", md: "150px" }}
                    height={{ sm: "300px", md: "500px" }}
                    right="0"
                    top={{ sm: "300px", lg: "200px" }}
                    borderRadius="500px"
                />

                <Box
                    boxSize='250px'
                    background="#FFF0D2"
                    filter='auto'
                    blur='50px'
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "250px", md: "300px" }}
                    height={{ sm: "230px" }}
                    bottom={{ sm: "0px" }}
                    left={{ md: "50px", lg: "180px" }}
                    borderRadius="500px"
                />
                <NavBar
                    style={{ display: "none" }}
                />
                <div className="payment-container">
                    <div className="payment-purple-component-container">
                        <div className="payment-purple-component">
                            <div className="payment-frase">
                                <p>Acompanhe seus</p>
                                <h1>PAGAMENTOS</h1>
                                <span>de perto!</span>
                            </div>

                            <div className="payment-cards">
                                <PaymentCard
                                    consult="1° consulta"
                                    profession="Fisioterapelta"
                                    value="R$ 150.00"
                                />
                                <PaymentCard
                                    consult="1° consulta"
                                    profession="Neurologista"
                                    value="R$ 200.00"
                                />
                                <PaymentCard
                                    consult="1° consulta"
                                    profession="Cardiologista"
                                    value="R$ 120.00"
                                />
                                <PaymentCard
                                    consult="1° consulta"
                                    profession="Radiologista"
                                    value="R$ 900.00"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="payment-white-component-container">
                        <div className="payment-white-component">
                            <img src={MedicalPayment} alt="" />
                        </div>

                        <div className="payment-income">
                            <p>Esse mês você gastou</p>
                            <h1>R4 1.370,00</h1>

                            <p>Com o plano básico voc~e gastaria</p>
                            <h2>R$ 1.265,00</h2>
                            <span>R$ 1.370,00</span>

                            <p>Com o plano intermediário você gastaria</p>
                            <h2>R$ 1.170,00</h2>
                            <span>R$ 1.370,00</span>

                            <p>Com o plano premium você gastaria</p>
                            <h2>R$ 1.070,00</h2>
                            <span>R$ 1.370,00</span>
                        </div>
                    </div>
                </div>

                <div className="payment-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default paymentPage;