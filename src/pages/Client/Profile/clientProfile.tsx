import "./styles.css"
import NavBar from "../../../components/NavBar/NavBar";
import ClientProfile from "../../../assets/img/static/clientProfile.png"
import TextField from "../../../components/TextFIeld/TextField";
import Footer from "../../../components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import MedicalTextField from "../../../components/MedicalTextField/MedicalTextField";

function profileClient() {
    return (
        <>
            <div className="client-profile-page">
                <Box
                    boxSize='250px'
                    background="#CBDCF4"
                    filter='auto'
                    blur="80px"
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "200px", lg: "400px" }}
                    height={{ sm: "200px", lg: "220px", xl: "260px" }}
                    top={{ sm: "0", lg: "130px" }}
                    right="0"
                />

                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur='70px'
                    position="absolute"
                    zIndex={-0.5}
                    width={{ sm: "200px", lg: "500px", xl: "600px" }}
                    height={{ sm: "300px" }}
                    top={{ sm: "300px" }}
                />

                <Box
                    boxSize='250px'
                    background="#D0FFDB"
                    filter='auto'
                    blur='90px'
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "270px", lg: "400px", xl: "600px" }}
                    height={{ sm: "320px", lg: "380px", xl: "400px" }}
                    top={{ sm: "601px" }}
                    right="0"
                />
                <Box
                    boxSize='250px'
                    background="#FFF0D2"
                    filter='auto'
                    blur='90px'
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "270px", lg: "300px" }}
                    height={{ sm: "400px" }}
                    bottom={{ sm: "200px", lg: "0" }}
                    left="0"
                />

                <Box
                    boxSize='250px'
                    background="#CBDCF4"
                    filter='auto'
                    blur={"80px"}
                    position="absolute"
                    zIndex={0.5}
                    width={{ sm: "150px" }}
                    height={{ sm: "220px" }}
                    bottom="0"
                    right="0"
                />
                <NavBar />

                <div className="client-profile-container">
                    <div className="client-profile-data">
                        <img src={ClientProfile} />

                        <div className="client-profile-data-text">
                            <h1>Sophia Beatriz Oliveira dos Santos, 27 anos</h1>
                            <p>sophiabeatriz@example.com</p>
                        </div>
                    </div>

                    <div className="client-personal-profile">
                        <div className="client-profile-data-text-desktop">
                            <h1>Sophia Beatriz Oliveira dos Santos, 27 anos</h1>
                            <p>sophiabeatriz@example.com</p>
                        </div>

                        <div className="client-profile-birth">
                            <TextField
                                label="Nascimento"
                                placeholder="01/01/1996"
                            />
                        </div>

                        <div className="client-profile-cpf">
                            <TextField
                                label="CPF"
                                placeholder="847.676.985-23"
                            />
                        </div>

                        <div className="client-profile-gender">
                            <TextField
                                label="Gênero"
                                placeholder="Feminino"
                            />
                        </div>

                        <div className="client-profile-contact">
                            <TextField
                                label="Contato"
                                placeholder="-88 9 9704-1316"
                            />
                        </div>

                        <div className="client-profile-rg">
                            <TextField
                                label="RG"
                                placeholder="679832145"
                            />
                        </div>

                        <div className="client-profile-state">
                            <TextField
                                label="Estado"
                                placeholder="Ceará"
                            />
                        </div>

                        <div className="client-profile-city">
                            <TextField
                                label="Cidade"
                                placeholder="Fortaleza"
                            />
                        </div>

                        <div className="client-profile-neighborhood">
                            <TextField
                                label="Bairro"
                                placeholder="Centro"
                            />
                        </div>

                        <div className="client-profile-road">
                            <TextField
                                label="Rua/Avenida"
                                placeholder="Rua José de Alencar"
                            />
                        </div>

                        <div className="client-profile-number">
                            <TextField
                                label="Número"
                                placeholder="597"
                            />
                        </div>
                    </div>
                </div>

                <div className="client-profile-historic">
                    <h1>Histórico Médico</h1>

                    <div className="client-profile-type">
                        <TextField
                            label="Tipo"
                            placeholder="O+"
                        />
                    </div>

                    <div className="client-profile-allergies">
                        <TextField
                            label="Alergias Medicamentosas"
                            placeholder="Não Possui"
                        />
                    </div>

                    <div className="client-profile-disease-history">
                        <TextField
                            label="Histórico de doenças prévias"
                            placeholder="Diabetes"
                        />
                    </div>
                    <div className="client-profile-medicines">
                        <TextField
                            label="Medicamentos atualmente em uso"
                            placeholder="Metformina; Sulfonilureia; Glitazonas;"
                        />
                    </div>

                    <div className="client-profile-surgeries-history">
                        <TextField
                            label="Histórico de cirurgias"
                            placeholder="Não há cirurgias nesse histórico"
                        />
                    </div>

                    <div className="client-profile-hospitalization">
                        <TextField
                            label="Histórico de internação"
                            placeholder="Hospital Geral de Fortaleza - 2 meses; Hospital São José de Doenças Infecciosas - 4 meses;"
                        />
                    </div>

                    <div className="client-profile-observation">
                        <TextField
                            label="Observações extras:"
                            placeholder="Nenhuma"
                        />
                    </div>
                </div>

                <div className="client-profile-exams">
                    <h1>Exames</h1>

                    <div className="client-profile-exams-container">
                        <MedicalTextField />
                        <MedicalTextField />
                        <MedicalTextField />
                    </div>
                </div>

                <div className="client-profile-queries">
                    <h1>Consultas</h1>
                    <MedicalTextField />
                    <MedicalTextField />
                </div>

                <div className="client-profile-documents">
                    <h1>Documentos</h1>

                    <div className="client-profile-documents-container">
                        <TextField
                            placeholder="Serviço Indisponível no momento" />
                    </div>
                </div>

                <div className="client-profile-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default profileClient;