import React, { useState } from "react";
import MicroscopeIcon from "../../../assets/img/static/microscopeIcon.png"
import NurseIcon from "../../../assets/img/static/nurseIcon.png"
import BandAidIcon from "../../../assets/img/static/bandAidIcon.png"
import { Box, Button, Flex, FormControl, Icon, Image, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CloseButton from "../../../components/CloseButton/CloseButton";
import TextField from "../../../components/TextFIeld/TextField";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { IRegisterUser } from "../../../@types/api/requests.types";
import Loading from "../../Loading/Loading";
import "./styles.css";

function Register() {
    // form state fields
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
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
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");

    // rendering states
    const [show, setShow] = React.useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const navigate = useNavigate();
    const { register } = useApi();

    const handleClick = () => setShow(!show)

    async function handleRegister() {
        if (!houseNumber) return alert('Informe o número do endereço.');

        if (password != repeatPassword) return alert('As senhas não correspondem.');

        if (gender.toLowerCase() != 'masculino' && gender.toLowerCase() != 'feminino')
            return alert('Informe um gênero válido.');

        const userToRegister: IRegisterUser = {
            fullName, 
            email, 
            birthDate, 
            cpf, 
            rg, 
            address: {
                state, city, street, neighborhood, houseNumber
            }, 
            phoneNumber, 
            gender, 
            password, 
            repeatPassword
        };

        try {
            setIsLoading(true);
            await register(userToRegister);
            navigate('/login');
        } 
        catch (error) {
            alert(error);
            setIsLoading(false);
        }
    }

    return (
        <div className="register-page">
            {isLoading && <Loading />}

            <Box
                boxSize='250px'
                background="rgba(203, 220, 244, 1)"
                filter='auto'
                blur="70px"
                position="absolute"
                zIndex="1"
                width={{ sm: "300px", lg: "650px" }}
                height={{ sm: "300px" }}
                top={{ sm: "0px" }}
                left={{ sm: "0px", lg: "-60px" }}
                borderRadius={{ sm: "100px" }}
            />

            <Box
                boxSize='250px'
                background="rgba(173, 230, 255, 1)"
                filter='auto'
                blur="80px"
                position="absolute"
                zIndex="1"
                width={{ sm: "300px", lg: "500px" }}
                height={{ sm: "400px" }}
                bottom="0"
                left={{ sm: "-50px", lg: "-59" }}
                borderRadius={{ sm: "50px" }}
            />


            <Box
                display={{ sm: "none", lg: "flex" }}
                background="rgba(255, 240, 210, 1)"
                filter='auto'
                blur="30px"
                position="absolute"
                zIndex="1"
                width={{ lg: "460px" }}
                height={{ lg: "200px" }}
                bottom="0"
                right={{ sm: "30px", lg: "0px" }}
            />

            <div className="register-card">

                <div className="register-close-buttom" onClick={() => navigate('/')}>
                    <CloseButton />
                </div>

                <div className="register-card-container">

                    <Image
                        src={BandAidIcon}
                        position="absolute"
                        width="100px"
                        right={{ lg: "-70px" }}
                        bottom={{ lg: "-90px" }}
                        display={{ sm: "none", lg: "flex" }}
                        zIndex="2"

                    />
                    <Image
                        src={MicroscopeIcon}
                        position="absolute"
                        width={{ sm: "80px", lg: "200px" }}
                        left={{ sm: "-15px", md: "60px", lg: "-100px" }}
                        top={{ lg: "-80px" }}
                    />
                    <h1>Cadastre-se</h1>

                    <p>Experimente a tradição de cuidar da saúde da família ProMed!</p>
                </div>

                <FormControl
                padding={{md: "0 20px"}}
                >
                    <div className="register-row-name">
                        <TextField
                            label="Nome Completo"
                            placeholder="Nome Completo"
                            type="text"
                            className="oie"
                            setState={setFullName}
                        />
                    </div>
                    <div className="register-row-email">

                        <TextField
                            label="Email"
                            placeholder="Email"
                            type="email"
                            setState={setEmail}
                        />
                    </div>

                    <div className="register-row-birth">
                        <TextField
                            label="Data de nascimento"
                            placeholder="00/00/0000"
                            type="text"
                            setState={setBirthDate}
                        />
                    </div>
                    <div className="register-row-cpf">
                        <TextField
                            label="CPF"
                            placeholder="000.000.000-00"
                            type="text"
                            setState={setCpf}
                        />
                    </div>

                    <div className="register-row-rg">

                        <TextField
                            label="RG"
                            placeholder="000000000"
                            type="text"
                            setState={setRg}
                        />
                    </div>

                    <div className="register-row-contact">
                        <TextField
                            label="Contato"
                            placeholder="-99 99999 9999"
                            type="text"
                            setState={setPhoneNumber}
                        />
                    </div>

                    <div className="register-row-gender">
                        <TextField
                            label="Gênero"
                            placeholder="Indefinido"
                            type="text"
                            setState={setGender}
                        />
                    </div>

                    <div className="register-row-state">
                        <TextField
                            label="Estado"
                            placeholder="AC"
                            type="text"
                            setState={setState}
                        />
                    </div>

                    <div className="register-row-city">
                        <TextField
                            label="Cidade"
                            placeholder="Cidade"
                            type="text"
                            setState={setCity}
                        />
                    </div>

                    <div className="register-row-neighborhood">
                        <TextField
                            label="Bairro"
                            placeholder="Bairro"
                            type="text"
                            setState={setNeighborhood}
                        />
                    </div>

                    <div className="register-row-road">
                        <TextField
                            label="Rua/Avenida"
                            placeholder="Rua/Avenida"
                            type="text"
                            setState={setStreet}
                        />
                    </div>

                    <div className="register-row-number">
                        <TextField
                            label="Número"
                            placeholder="00"
                            type="text"
                            setState={setHouseNumber}
                        />
                    </div>

                    <div className="register-row-password">
                        <InputGroup
                            display="flex"
                            flexDirection="column"
                        >

                            <Flex flexDirection="column">

                                <TextField
                                    placeholder="Senha"
                                    label="Senha"
                                    type={show ? 'text' : 'password'}
                                    setState={setPassword}
                                />
                            </Flex>

                            <InputRightElement width='4.5rem' >
                                <Button
                                    width="80px"
                                    fontSize="20px"
                                    background="transparent"
                                    border="none"
                                    top={{ sm: "21px", lg: "21px" }}
                                    left="13px"
                                    onClick={handleClick}
                                    _hover={{ border: "none", background: "transparent" }}
                                >
                                    {show ? <Icon as={ViewOffIcon} color="rgba(123, 47, 198, 1)" /> : <Icon as={ViewIcon} color="rgba(123, 47, 198, 1)" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </div>

                    <div className="register-row-password">
                        <InputGroup
                            display="flex"
                            flexDirection="column"
                        >

                            <Flex flexDirection="column">

                                <TextField
                                    placeholder="Repita sua senha"
                                    label="Repita sua senha"
                                    type={show ? 'text' : 'password'}
                                    setState={setRepeatPassword}
                                />
                            </Flex>

                            <InputRightElement width='4.5rem' >
                                <Button
                                    width="80px"
                                    fontSize="20px"
                                    background="transparent"
                                    border="none"
                                    top={{ sm: "21px", lg: "21px" }}
                                    left="13px"
                                    onClick={handleClick}
                                    _hover={{ border: "none", background: "transparent" }}
                                >
                                    {show ? <Icon as={ViewOffIcon} color="rgba(123, 47, 198, 1)" /> : <Icon as={ViewIcon} color="rgba(123, 47, 198, 1)" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
 
                    <div className="register-buttom">

                        <Button
                            background="rgba(158, 99, 255, 1)"
                            _hover={{ bg: "rgba(158, 99, 255, 1)" }}
                            cursor="pointer"
                            color="#FFFF"
                            border="none"
                            width={{ sm: "240px", md: "300px" }}
                            height={{ sm: "45px", md: "60px" }}
                            fontSize="18px"
                            marginTop="20px"
                            fontWeight="800"
                            borderRadius="15px"
                            transform="translateY(20px)"
                            position="relative"
                            onClick={handleRegister}
                        >
                            Tudo pronto!
                        </Button>

                        <Image src={NurseIcon}
                            position="absolute"
                            width={{ sm: "70px", md: "85px" }}
                            transform="translate(-120px, 30px)"
                            zIndex="1"
                        />
                    </div>
                </FormControl>
            </div>
        </div>
    )
}

export default Register