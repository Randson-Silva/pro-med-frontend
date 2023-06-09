import { FormControl, Text, InputGroup, InputRightElement, Button, Flex, Box, Image, Icon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../../context/ProfileContext";
import ChairIcon from "../../../assets/img/static/chairIcon.png"
import MascIcon from "../../../assets/img/static/mascIcon.png"
import { useContext, useState } from "react";
import TextField from "../../../components/TextFIeld/TextField";
import Loading from "../../Loading/Loading";
import "./styles.css"

function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    
    const { isAuthenticated, user, handleLogin, handleLogout } = useContext(ProfileContext);

    async function login() {
        try {
            setIsLoading(true);
            await handleLogin(email, password);
        } 
        finally {
            setIsLoading(false);
        }
    }

    if (isAuthenticated) navigate(`/${user!.role.toLowerCase()}/home`);

    return (
        <>
            <div className="login-page">
                {isLoading && <Loading />}

                <Box
                    boxSize='250px'
                    background="rgba(203, 220, 244, 1)"
                    filter='auto'
                    blur="80px"
                    position="absolute"
                    zIndex="1"
                    width={{ sm: "400px", lg: "600px" }}
                    height={{ sm: "300px" }}
                    top={{ sm: "0px" }}
                    left={{ sm: "0px", lg: "10px" }}
                    borderRadius={{ sm: "100px" }}
                />

                <Box
                    display={{ lg: "none" }}
                    boxSize='250px'
                    background="rgba(255, 255, 255, 1)"
                    filter='auto'
                    blur="1px"
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "160px" }}
                    height={{ sm: "500px" }}
                    bottom={{ sm: "410px" }}
                    left={{ sm: "2px" }}
                    transform=" rotate(44.29deg)"
                    borderRadius={{ sm: "200px" }}
                />

                <Box
                    boxSize='250px'
                    background="rgba(173, 230, 255, 1)"
                    filter='auto'
                    blur="50px"
                    position="absolute"
                    zIndex="1"
                    width={{ sm: "200px", lg: "500px" }}
                    height={{ sm: "350px" }}
                    bottom={{ sm: "340px", lg: "0" }}
                    left={{ sm: "-50px", lg: "-59" }}
                    borderRadius={{ sm: "50px" }}
                />

                <Box
                    display={{ lg: "none" }}
                    boxSize='250px'
                    background="rgba(194, 157, 255, 1)"
                    filter='auto'
                    position="absolute"
                    zIndex={1}
                    width={{ sm: "200px" }}
                    height={{ sm: "600px" }}
                    bottom={{ sm: "30px" }}
                    right={{ sm: "-40px" }}
                    transform=" rotate(44.29deg)"
                    borderRadius={{ sm: "200px" }}
                />

                <Box
                    display={{ sm: "flex", lg: "none" }}
                    background="rgba(255, 240, 210, 1)"
                    filter='auto'
                    blur="20px"
                    position="absolute"
                    zIndex="1"
                    width="100px"
                    height="280px"
                    bottom="200px"
                    right="0px"
                />

                <Box
                    display={{ sm: "none", lg: "flex" }}
                    background="rgba(255, 240, 210, 1)"
                    filter='auto'
                    blur="30px"
                    position="absolute"
                    zIndex="2"
                    width={{ lg: "460px" }}
                    height={{ lg: "200px" }}
                    bottom={{ sm: "40px", lg: "0px" }}
                    right={{ sm: "30px", lg: "0px" }}
                />

                <div className="login-card">

                    <div className="login-card-img-container">

                        <Image
                            src={ChairIcon}
                            position="absolute"
                            width={{ sm: "100px", lg: "135px" }}
                            top={{ sm: "-140px", lg: "470px" }}
                            left={{ sm: "-30px", lg: "-550" }}
                            zIndex="2"
                        />

                        <Image
                            src={MascIcon}
                            position="absolute"
                            width={{ sm: "70px", lg: "120px" }}
                            right={{ sm: "-25px", lg: "400px" }}
                            zIndex={{ sm: "2", lg: "-1" }}
                        />

                        <div className="login-card-img"> </div>

                        <div className="login-card-img-desktop"> </div>
                    </div>

                    <h1>
                        Sign In
                    </h1>

                    <p onClick={() => navigate('/register')}>
                        Ainda não possui cadastro? <span>Cadastre-se agora!</span>
                    </p>
   
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gap="10px"
                    >
                        <Flex
                            flexDirection="column"
                        >
                            <TextField
                                value={email}
                                style={{ textAlign: "left" }}
                                placeholder="Email"
                                type="text"
                                label="Email"
                                setState={setEmail}
                            />
                        </Flex> 

                        <InputGroup
                            display="flex"
                            flexDirection="column"
                        >

                            <Flex flexDirection="column">

                                <TextField
                                    value={password}
                                    style={{ textAlign: "left" }}
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
                                    top={{ sm: "26px", lg: "28px" }}
                                    left="8px"
                                    onClick={handleClick}
                                    _hover={{ border: "none", background: "transparent" }}
                                >
                                    {show ? <Icon as={ViewOffIcon} color="rgba(123, 47, 198, 1)" /> : <Icon as={ViewIcon} color="rgba(123, 47, 198, 1)" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Flex
                            align="center"
                            justify="center"
                            flexDirection="column"
                        >
                            <Button
                                background="rgba(158, 99, 255, 1)"
                                _hover={{ bg: "rgba(158, 99, 255, 1)" }}
                                cursor="pointer"
                                color="#FFFF"
                                border="none"
                                width={{ sm: "170px", lg: "200px" }}
                                height={{ sm: "45px", lg: "50px" }}
                                marginTop="20px"
                                fontWeight="800"
                                borderRadius="15px"
                                onClick={login}
                            >
                                LOGIN
                            </Button>

                            <Text
                                marginTop="7px"
                                cursor="pointer"
                            >
                                Esqueceu sua senha?
                            </Text>
                        </Flex>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Login;