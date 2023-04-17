import "./styles.css"
import PlansMedical from "../../../assets/img/static/plansMedical.png"
import NavBar from "../../../components/NavBar/NavBar"
import PlansCard from "../../../components/PlansCard/PlansCard"
import PlansImgCard from "../../../assets/img/static/plansImgCard.png"
import Footer from "../../../components/Footer/Footer"
import { Box } from "@chakra-ui/react"
import NavBarClient from "../../../components/NavBarClient/NavBarClient"

function Plans() {
    return (
        <>
            <div className="plans-page">

                <Box
                    display={{ sm: "flex", lg: "none" }}
                    boxSize='250px'
                    background="#CBDCF4"
                    filter='auto'
                    blur="50px"
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "240px", lg: "450px" }}
                    height={{ sm: "200px", lg: "400px" }}
                    top="-20px"
                    right="0"
                />
                <Box

                    boxSize='250px'
                    background="#ADE6FF"
                    filter='auto'
                    blur="80px"
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "250px", lg: "450px" }}
                    height={{ sm: "400px", lg: "400px" }}
                    top="300px"
                    left="0"
                    borderRadius="500px"
                />
                <Box

                    display={{ sm: "flex", lg: "none" }}
                    boxSize='250px'
                    background="#D0FFDB"
                    filter='auto'
                    blur="50px"
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "200px", lg: "450px" }}
                    height={{ sm: "300px", lg: "400px" }}
                    bottom="300px"
                    right="0"
                    borderRadius="500px"
                />
                <Box
                    boxSize='250px'
                    background={{ sm: "#FFF0D2", lg: "#D0FFDB" }}
                    filter='auto'
                    blur="40px"
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "200px", lg: "450px" }}
                    height={{ sm: "350px", lg: "400px" }}
                    bottom="0"
                    left="0"
                    borderRadius="500px"
                />
                <NavBarClient />

                <div className="plans-container">
                    <div className="plans-purple-component">
                        <div className="plans-purple-component-container">
                            <div className="plans-purple-component-frase">
                                <p>Você já conhece nossos</p>
                                <h1>Planos?</h1>
                                <span>Não!? Vem conhecer!</span>
                            </div>
                            <img src={PlansMedical} alt="" />
                        </div>
                    </div>

                    <br />

                    <div className="plans-cards">
                        <PlansCard
                            src={PlansImgCard}
                            title="Plano Básico"
                            text="Com o Plano Médico Básico, você tem acesso a uma ampla rede de médicos, além de ter direito a até 8% de desconto em consultas, exames e procedimentos médicos. Este plano é ideal para aqueles que buscam um atendimento de qualidade sem pesar no bolso."
                            value="R$ 80/mês"
                        />
                        <PlansCard
                            src={PlansImgCard}
                            title="Plano Intermediário"
                            text="O Plano Médico Intermediário oferece ainda mais benefícios, como desconto de até 15% em consultas, exames e procedimentos médicos. Este plano é indicado para pessoas que valorizam a segurança e a tranquilidade."
                            value="R$ 80/mês"
                        />
                        <PlansCard
                            src={PlansImgCard}
                            title="Plano Premium"
                            text="Com o Plano Médico Premium, você tem acesso a uma ampla rede de médicos especialistas, exames de alta complexidade, entre outros benefícios. Além disso, você tem direito a até 25% de desconto em consultas, exames e procedimentos médicos. Este plano é indicado para aqueles que buscam o melhor atendimento médico e um estilo de vida saudável."
                            value="R$ 80/mês"
                        />
                    </div>
                </div>

                <div className="plans-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Plans