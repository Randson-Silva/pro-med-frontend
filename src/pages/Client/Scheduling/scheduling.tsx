import "./styles.css"
import SchedulingImg from "../../../assets/img/static/shcedulingImg.png"
import SchedulingImgDesktop from "../../../assets/img/static/schedulingImgDesktop.png"
import SchedulingPromotions from "../../../assets/img/static/schedulingPromotios.png"
import SchedulingQuestions from "../../../assets/img/static/schedulingQuestionsImg.png"
import Calendar from "../../../components/Calendar/Calendar";
import SchedulingFaq from "../../../components/schedulingFaq/schedulingFaq";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Select } from "@chakra-ui/react";
import Footer from "../../../components/Footer/Footer";
import NavBarClient from "../../../components/NavBarClient/NavBarClient";

function scheduling() {
    return (
        <>
            <div className="scheduling-page">
                <NavBarClient />

                <div className="scheduling-components">

                    <img src={SchedulingImg} alt="" className="scheduling-img-mobile" />
                    <img src={SchedulingImgDesktop} alt="" className="scheduling-img-desktop" />


                    <div className="scheduling-frase-component">
                        <p>Não perca tempo</p>
                        <h1>AGENDE JÁ</h1>
                        <h2>sua consulta e <span> ﾠ </span> cuide da</h2>
                        <h3>SUA SAÚDE!</h3>
                    </div>

                    <div className="scheduling-card">
                        <h1>AGENDAMENTOS</h1>
                        <br />
                        <h3>1° Consulta com Psiquiatra
                            <br />
                            Dra. Livia Duarte
                            <br />
                            22/03/2023 - 14:00
                        </h3>

                        <br />

                        <h3>Endoscopia
                            <br />
                            Dr. Junior Soares
                            <br />
                            27/03/2023 - 17:00
                        </h3>
                    </div>

                </div>


                <div className="scheduling-selection">
                    <div className="scheduling-selection-container">
                        <button>CONSULTAS</button>
                        <button>EXAMES</button>
                    </div>

                    <div className="scheduling-selection-medical">
                        <Select
                            placeholder='Select option'
                            borderRadius="50px"
                            color="rgba(158, 99, 255, 1)"
                            background="rgba(230, 214, 255, 1)"
                            fontSize="12px"
                            width={{ sm: "240px", md: "300px" }}
                            height={{ sm: "40px", md: "50px" }}
                            position="relative"
                            left="-40px"
                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Select
                            placeholder='Select option'
                            borderRadius="50px"
                            color="rgba(158, 99, 255, 1)"
                            background="rgba(230, 214, 255, 1)"
                            fontSize="12px"
                            width={{ sm: "240px", md: "300px" }}
                            height={{ sm: "40px", md: "50px" }}
                            position="relative"
                            right="-40px"
                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                </div>

                <div className="scheduling-calendar">
                    <Calendar />

                    <div className="scheduling-calendar-selection">
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                        <h1>07:00</h1>
                    </div>
                </div>

                <div className="scheduling-calendar-button">
                    <button>MARCAR CONSULTA</button>
                </div>


                <div className="scheduling-promotions">
                    <img src={SchedulingPromotions} alt="" />

                    <div className="scheduling-promotions-card">

                        <div className="scheduling-promotions-card-container">
                            <h1> <span>1</span> ano</h1>
                            <h2>com você!</h2>
                        </div>

                        <p>Este pacote oferece aos pacientes a oportunidade de receber cuidados de saúde regulares e preventivos a um preço reduzido. Ele inclui consultas regulares com um médico, exames de rotina (por exemplo, análises de sangue, exames de urina, etc.), e tratamentos especializados, se necessário. Além disso, pacientes inscritos no pacote também podem ter acesso a descontos em outros serviços oferecidos pela clínica.</p>
                    </div>

                    <div className="scheduling-promotions-cards-desktop">
                        <div className="scheduling-promotions-card-desktop">

                            <div className="scheduling-promotions-card-container">

                                <h2>+amigo</h2>
                            </div>

                            <p>Este programa de recompensas incentiva os pacientes atuais a indicar a clínica para seus amigos e familiares. Se o paciente refere um amigo ou parente e ele se torna um paciente ativo, o paciente original recebe um desconto em sua próxima visita. Isso ajuda a clínica a expandir sua base de pacientes e oferece aos pacientes uma oportunidade de economizar em seus cuidados de saúde.</p>
                        </div>
                        <div className="scheduling-promotions-card-desktop">

                            <div className="scheduling-promotions-card-container">
                                <h1> <span>1</span> ano</h1>
                                <h2>com você!</h2>
                            </div>

                            <p>Este pacote oferece aos pacientes a oportunidade de receber cuidados de saúde regulares e preventivos a um preço reduzido. Ele inclui consultas regulares com um médico, exames de rotina (por exemplo, análises de sangue, exames de urina, etc.), e tratamentos especializados, se necessário. Além disso, pacientes inscritos no pacote também podem ter acesso a descontos em outros serviços oferecidos pela clínica.</p>
                        </div>
                        <div className="scheduling-promotions-card-desktop">

                            <div className="scheduling-promotions-card-container">
                                <h1>jovem</h1>
                                <h2>estudante</h2>
                            </div>

                            <p>Este pacote oferece aos pacientes a oportunidade de receber cuidados de saúde regulares e preventivos a um preço reduzido. Ele inclui consultas regulares com um médico, exames de rotina (por exemplo, análises de sangue, exames de urina, etc.), e tratamentos especializados, se necessário. Além disso, pacientes inscritos no pacote também podem ter acesso a descontos em outros serviços oferecidos pela clínica.</p>
                        </div>
                    </div>
                </div>

                <div className="scheduling-questions">
                    <div className="scheduling-questions-container">
                        <div className="scheduling-questions-frase">
                            <h1>FAQ COM
                                <br />
                                <h3>Dra.Fernanda Lima</h3>
                            </h1>
                            <Accordion
                                width={{ sm: "220px", md: "300px", lg: "400px" }}
                                defaultIndex={[0]} allowMultiple
                                background="rgba(224, 209, 235, 1)"
                                borderRadius="50px"
                                fontSize={{ sm: "10px", md: "13px" }}
                                color="rgba(158, 99, 255, 1)"
                                position="relative"
                                padding={{sm: "0 0", md: "10px 10px"}}
                                border="transparent"
                            >
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                textAlign='left'
                                                fontSize="12px"
                                                fontWeight="600"
                                            >
                                                Como posso agendar uma consulta na ProMed?
                                            </Box>
                                            <AccordionIcon
                                                position="absolute"
                                                right="10px"
                                            />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>

                                        Você pode agendar sua consulta na clínica ProMed de duas maneiras: comparecendo diretamente à clínica ou através do nosso site.

                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion
                            width={{ sm: "220px", md: "300px", lg: "400px" }}
                                defaultIndex={[0]} allowMultiple
                                background="rgba(224, 209, 235, 1)"
                                borderRadius="50px"
                                fontSize={{ sm: "10px", md: "13px" }}
                                padding={{sm: "0 0", md: "10px 10px"}}
                                color="rgba(158, 99, 255, 1)"
                                position="relative"
                                border="transparent"
                            >
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box
                                                textAlign='left'
                                                fontSize="12px"
                                                fontWeight="600"
                                            >
                                                Qual é o horário de funcionamento da ProMed?"

                                            </Box>
                                            <AccordionIcon
                                                position="absolute"
                                                right="10px"
                                            />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Nosso horário de funcionamento é das 07:00 às 18:00!

                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                            
                        </div>

                        <div className="scheduling-questions-img">
                            <img src={SchedulingQuestions} alt="" />
                        </div>
                    </div>

                    <div className="scheduling-questions-faq">

                        <SchedulingFaq
                            title="É necessário trazer algum tipo de documento na primeira consulta?"
                            text="Para agendar sua primeira consulta, você precisará fornecer algumas informações pessoais, incluindo Nome Completo, Data de Nascimento, CPF, RG e Endereço. Isso pode ser feito presencialmente na clínica ou enviando esses documentos através do nosso site."
                        />
                        <SchedulingFaq
                            title="A ProMed aceita convênios médicos?"
                            text="Desculpe, mas atualmente não oferecemos atendimento para convênios. No entanto, estamos considerando essa opção para o futuro. Enquanto isso, temos planos que atendem às suas necessidades, venha conhecê-los!"
                        />
                        <SchedulingFaq
                            title="A clínica oferece atendimento online ou telemedicina?"
                            text="A grande maioria dos nossos pacientes agendam suas consultas online, mas, atualmente, todas as consultas são realizadas presencialmente. No entanto, a telemedicina é um plano futuro para a ProMed."
                        />

                        <SchedulingFaq
                            title="A ProMed realiza exames?"
                            text="Na clínica ProMed, disponibilizamos uma vasta seleção de testes médicos para atender às suas necessidades. Alguns dos exames que oferecemos incluem Tomografia, Radiografia, Hemograma Completo, Ultrassom, Raio-X, Eletrocardiograma, Ressonância Magnética, Endoscopia, entre outros. Por enquanto, todos os agendamentos de exames devem ser feitos presencialmente na nossa clínica. Venha nos visitar e marque seu horário!"
                        />

                        <SchedulingFaq
                            title="Posso agendar uma consulta com um médico específico na clínica?"
                            text="Você não só pode, como também deve escolher seu médico preferido ao agendar sua consulta conosco! No nosso site, oferecemos a opção de selecionar o médico de sua preferência, garantindo um atendimento personalizado e de acordo com as suas necessidades."
                        />

                        <SchedulingFaq
                            title="A clínica tem atendimento de emergência?"
                            text="Desculpe, não estamos atualmente oferecendo atendimento a emergências. Nossa equipe está concentrada apenas em atender consultas previamente agendadas."
                        />

                    </div>
                </div>
                <div className="scheduling-footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default scheduling;