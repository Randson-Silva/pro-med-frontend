import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { CSSProperties } from "react"

function schedulingFaq(
    props: {
        title: string
        text: string
    }
) {
    return (
        <div className="scheduling-faq">

            <Accordion
                width={{ sm: "355px", md: "500px", lg: "400px" }}
                defaultIndex={[0]} allowMultiple
                background="rgba(224, 209, 235, 1)"
                borderRadius="50px"
                fontSize={{ sm: "10px", md: "13px" }}
                color="rgba(158, 99, 255, 1)"
                position="relative"
                padding={{ sm: "10px 10px" }}
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
                                {props.title}
                            </Box>
                            <AccordionIcon
                                position="absolute"
                                right="10px"
                            />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {props.text}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default schedulingFaq