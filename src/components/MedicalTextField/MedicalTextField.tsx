import { CSSProperties } from "react"
import { FormLabel, Input } from "@chakra-ui/react"

function MedicalTextField(props: {
    label?: string
    placeholder?: string
    type?: string
    className?: string
    style?: CSSProperties
}) {
    return (
        <div className="medical-text-field-component">

            <FormLabel
               margin="0"
               color="#9E63FF"
               fontSize={{ sm: "10px", lg: "15px" }}
               fontWeight="500"
               lineHeight="25px"
               position="relative"
            >
                {props.label}
            </FormLabel>

            <Input
                style={props.style ? props.style : { textAlign: "center" }}
                type={props.type}
                className={props.className}
                placeholder={props.placeholder}
                _placeholder={{ color: "rgba(158, 99, 255, 0.5)", fontSize: "10px" }}
                fontSize={{ sm: "12px", lg: "15px" }}
                height={{ sm: "42px", lg: "44px" }}
                color="#9E63FF"
                background="rgba(230, 214, 255, 1)"
                border="rgba(123, 47, 198, 1) 2px solid"
                borderRadius="200px"
                _focusVisible={{ border: "rgba(123, 47, 198, 1) 2px solid" }}
                _hover={{ border: "rgba(123, 47, 198, 1) 2px solid" }}
            >
            </Input>

        </div>
    )
}

export default MedicalTextField