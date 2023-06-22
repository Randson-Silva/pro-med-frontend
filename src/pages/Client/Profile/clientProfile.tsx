import { Box, Button } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import ClientProfile from "../../../assets/img/static/clientProfile.png";
import TextField from "../../../components/TextFIeld/TextField";
import Footer from "../../../components/Footer/Footer";
import MedicalTextField from "../../../components/MedicalTextField/MedicalTextField";
import NavBarClient from "../../../components/NavBarClient/NavBarClient";
import { ProfileContext } from "../../../context/ProfileContext";
import { IClientProfile } from "../../../@types/global/client.types";
import { calculateAge } from "../../../utils/api-utilities";
import { deserializeGender } from "../../../utils/api-deserializer";
import { serializeBloodType, serializeGender } from "../../../utils/api-serializer";
import { IUpdateClient } from "../../../@types/api/requests.types";
import "./styles.css";

function profileClient() {
    const [birthDate, setBirthDate] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [rg, setRg] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [houseNumber, setHouseNumber] = useState<number | null>(null);
    const [bloodType, setBloodType] = useState<string>("");
    const [prescriptionDrugs, setPrescriptionDrugs] = useState<string>("");
    const [drugAllergies, setDrugAllergies] = useState<string>("");
    const [hospitalizationHistoric, setHospitalizationHistoric] = useState<string>("");
    const [surgeriesHistoric, setSurgeriesHistoric] = useState<string>("");
    const [priorDiseases, setPriorDiseases] = useState<string>("");
    const [extraNotes, setExtraNotes] = useState<string>("");

    const { user, clientProfile } = useContext(ProfileContext);

    function updateClientInfo() {
        const clientToUpdate: IUpdateClient = {
            fullName: user?.fullName as string,
            email: user?.email as string,
            birthDate,
            cpf,
            rg,
            phoneNumber,
            gender: serializeGender(gender),
            address: {
                state,
                city,
                street,
                neighborhood,
                houseNumber: houseNumber as number
            },
            photo: clientProfile?.photo as string,
            medicalHistoric: {
                bloodType: serializeBloodType(bloodType) as string,
                prescriptionDrugs,
                drugAllergies,
                hospitalizationHistoric,
                surgeriesHistoric,
                priorDiseases,
                extraNotes,
            }
        }
    }

    useEffect(() => {
        const { birthDate, cpf, rg, phoneNumber, gender, address, medicalHistoric } = clientProfile as IClientProfile;
        const { state, city, street, neighborhood, houseNumber } = address;  
        
        setBirthDate(birthDate);
        setCpf(cpf);
        setRg(rg);
        setPhoneNumber(phoneNumber);
        setGender(deserializeGender(gender));
        setState(state);
        setCity(city);
        setStreet(street);
        setNeighborhood(neighborhood);
        setHouseNumber(houseNumber);

        if (medicalHistoric) {
            const { prescriptionDrugs, drugAllergies, hospitalizationHistoric, surgeriesHistoric, priorDiseases, extraNotes } = medicalHistoric;  
            setBloodType(bloodType);
            setPrescriptionDrugs(prescriptionDrugs);
            setDrugAllergies(drugAllergies);
            setHospitalizationHistoric(hospitalizationHistoric);
            setSurgeriesHistoric(surgeriesHistoric);
            setPriorDiseases(priorDiseases);
            setExtraNotes(extraNotes);        
        }
    }, []);

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
                <NavBarClient />

                <div className="client-profile-container">
                    <div className="client-profile-data">
                        <img src={ClientProfile} />

                        <div className="client-profile-data-text">
                            <h1>{`${user!.fullName}, ${calculateAge(user!.birthDate)} anos`}</h1>
                            <p>{user!.email}</p>
                        </div>
                    </div>

                    <div className="client-personal-profile">
                        <div className="client-profile-data-text-desktop">
                            <h1>{`${user!.fullName}, ${calculateAge(user!.birthDate)} anos`}</h1>
                            <p>{user!.email}</p>
                        </div>

                        <div className="client-profile-birth">
                            <TextField
                                label="Nascimento"
                                placeholder="01/01/1996"
                                value={birthDate}
                                setState={setBirthDate}
                            />
                        </div>

                        <div className="client-profile-cpf">
                            <TextField
                                label="CPF"
                                placeholder="847.676.985-23"
                                value={cpf}
                                setState={setCpf}
                            />
                        </div>

                        <div className="client-profile-gender">
                            <TextField
                                label="Gênero"
                                placeholder="Feminino"
                                value={gender}
                                setState={setGender}
                            />
                        </div>

                        <div className="client-profile-contact">
                            <TextField
                                label="Contato"
                                placeholder="(88) 9 9704-1316"
                                value={phoneNumber}
                                setState={setPhoneNumber}
                            />
                        </div>

                        <div className="client-profile-rg">
                            <TextField
                                label="RG"
                                placeholder="679832145"
                                value={rg}
                                setState={setRg}
                            />
                        </div>

                        <div className="client-profile-state">
                            <TextField
                                label="Estado"
                                placeholder="Ceará"
                                value={state}
                                setState={setState}
                            />
                        </div>

                        <div className="client-profile-city">
                            <TextField
                                label="Cidade"
                                placeholder="Fortaleza"
                                value={city}
                                setState={setCity}
                            />
                        </div>

                        <div className="client-profile-neighborhood">
                            <TextField
                                label="Bairro"
                                placeholder="Centro"
                                value={neighborhood}
                                setState={setNeighborhood}
                            />
                        </div>

                        <div className="client-profile-road">
                            <TextField
                                label="Rua/Avenida"
                                placeholder="Rua José de Alencar"
                                value={street}
                                setState={setStreet}
                            />
                        </div>

                        <div className="client-profile-number">
                            <TextField
                                label="Número"
                                placeholder="597"
                                value={houseNumber as number}
                                setState={setHouseNumber}
                            />
                        </div>
                    </div>
                </div>

                <div className="client-profile-historic">
                    <h1>Histórico Médico</h1>

                    <div className="client-profile-type">
                        <TextField
                            label="Tipo Sang."
                            placeholder="O+"
                            value={bloodType}
                            setState={setBloodType}
                        />
                    </div>

                    <div className="client-profile-allergies">
                        <TextField
                            label="Alergias Medicamentosas"
                            placeholder="Não Possui"
                            value={drugAllergies}
                            setState={setDrugAllergies}
                        />
                    </div>

                    <div className="client-profile-disease-history">
                        <TextField
                            label="Histórico de doenças prévias"
                            placeholder="Diabetes"
                            value={priorDiseases}
                            setState={setPriorDiseases}
                        />
                    </div>
                    <div className="client-profile-medicines">
                        <TextField
                            label="Medicamentos atualmente em uso"
                            placeholder="Metformina; Sulfonilureia; Glitazonas;"
                            value={prescriptionDrugs}
                            setState={setPrescriptionDrugs}
                        />
                    </div>

                    <div className="client-profile-surgeries-history">
                        <TextField
                            label="Histórico de cirurgias"
                            placeholder="Não há cirurgias nesse histórico"
                            value={surgeriesHistoric}
                            setState={setSurgeriesHistoric}
                        />
                    </div>

                    <div className="client-profile-hospitalization">
                        <TextField
                            label="Histórico de Internação"
                            placeholder="Hospital Geral de Fortaleza - 2 meses; Hospital São José de Doenças Infecciosas - 4 meses;"
                            value={hospitalizationHistoric}
                            setState={setHospitalizationHistoric}
                        />
                    </div>

                    <div className="client-profile-observation">
                        <TextField
                            label="Observações extras:"
                            placeholder="Nenhuma"
                            value={extraNotes}
                            setState={setExtraNotes}
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
                            placeholder="Serviço Indisponível no momento" 
                        />
                    </div>
                </div>

                <div className="client-save-area">
                    <Button
                        background="rgba(158, 99, 255, 1)"
                        _hover={{ bg: "rgba(158, 99, 255, 1)" }}
                        cursor="pointer"
                        color="#FFFF"
                        width={{ sm: "110px", lg: "140px" }}
                        height={{ sm: "40px", lg: "46px" }}
                        marginTop="20px"
                        fontWeight="600"
                        borderRadius="15px"
                    >
                        Salvar
                    </Button>
                </div>

                <div className="client-profile-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default profileClient;