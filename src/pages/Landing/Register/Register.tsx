import React from "react";
import "./styles.css";
import MicroscopeIcon from "../../../assets/img/static/microscopeIcon.png"
import NurseIcon from "../../../assets/img/static/nurseIcon.png"
import BandAidIcon from "../../../assets/img/static/bandAidIcon.png"
import { Box, Button, Flex, FormControl, Icon, Image, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CloseButton from "../../../components/CloseButton/CloseButton";
import TextField from "../../../components/TextFIeld/TextField";
import { useNavigate } from "react-router-dom";

function Register() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()

    return (
        <div className="register-page">

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

                <FormControl>
                    <div className="register-row-name">
                        <TextField
                            label="Nome Completo"
                            placeholder="Nome Completo"
                            type="text"
                            className="oie"
                        />
                    </div>
                    <div className="register-row-email">

                        <TextField
                            label="Email"
                            placeholder="Email"
                            type="email"
                        />
                    </div>

                    <div className="register-row-birth">
                        <TextField
                            label="Data de nascimento"
                            placeholder="00/00/0000"
                            type="text"
                        />
                    </div>
                    <div className="register-row-cpf">
                        <TextField
                            label="CPF"
                            placeholder="000.000.000-00"
                            type="text"
                        />
                    </div>

                    <div className="register-row-rg">

                        <TextField
                            label="RG"
                            placeholder="000000000"
                            type="text"
                        />
                    </div>

                    <div className="register-row-contact">
                        <TextField
                            label="Contato"
                            placeholder="-99 99999 9999"
                            type="text"
                        />
                    </div>

                    <div className="register-row-gender">
                        <TextField
                            label="Gênero"
                            placeholder="Indefinido"
                            type="text"
                        />
                    </div>

                    <div className="register-row-state">
                        <TextField
                            label="Estado"
                            placeholder="AC"
                            type="text"
                        />
                    </div>

                    <div className="register-row-city">
                        <TextField
                            label="Cidade"
                            placeholder="Cidade"
                            type="text"
                        />
                    </div>

                    <div className="register-row-neighborhood">
                        <TextField
                            label="Bairro"
                            placeholder="Bairro"
                            type="text"
                        />
                    </div>

                    <div className="register-row-road">
                        <TextField
                            label="Rua/Avenida"
                            placeholder="Rua/Avenida"
                            type="text"
                        />
                    </div>

                    <div className="register-row-number">
                        <TextField
                            label="Número"
                            placeholder="00"
                            type="text"
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
                                />
                            </Flex>

                            <InputRightElement width='4.5rem' >
                                <Button
                                    width="80px"
                                    fontSize="20px"
                                    background="transparent"
                                    border="none"
                                    top={{ sm: "26px", lg: "28px" }}
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
                                />
                            </Flex>

                            <InputRightElement width='4.5rem' >
                                <Button
                                    width="80px"
                                    fontSize="20px"
                                    background="transparent"
                                    border="none"
                                    top={{ sm: "26px", lg: "28px" }}
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
                            width={{ sm: "250px", md: "300px" }}
                            height={{ sm: "50px", md: "60px" }}
                            fontSize="18px"
                            marginTop="20px"
                            fontWeight="800"
                            borderRadius="15px"
                            transform="translateY(30px)"
                            position="relative"
                            onClick={() => navigate('/login')}
                        >
                            Tudo pronto!
                        </Button>

                        <Image src={NurseIcon}
                            position="absolute"
                            width={{ sm: "75px", md: "85px" }}
                            transform="translate(-130px, 36px)"
                            zIndex="1"
                        />
                    </div>
                </FormControl>
            </div>
        </div>
    )
}

export default Register