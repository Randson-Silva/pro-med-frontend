import { CSSProperties } from "react";
import { FormLabel, Input } from "@chakra-ui/react";

interface IProps {
    label?: string
    placeholder?: string
    type?: string
    className?: string
    style?: CSSProperties
}

function TextField({ className, label, placeholder, style, type }: IProps) {
    return (
        <div className="text-field-component">
            <FormLabel
                margin="0"
                color="#9E63FF"
                fontSize={{ sm: "9px", lg: "14px" }}
                fontWeight="500"
                lineHeight="20px"
                position="relative" 
            > 
                {label}
            </FormLabel>

            <Input
                style={style ? style : { textAlign: "center" }}
                type={type}
                className={className}
                placeholder={placeholder}
                _placeholder={{ color: "rgba(158, 99, 255, 0.5)", fontSize: "10px" }}
                fontSize={{ sm: "12px", lg: "15px" }}
                height={{ sm: "42px", lg: "44px" }}
                color="#9E63FF"
                background="rgba(230, 214, 255, 1)"
                border="rgba(123, 47, 198, 1) 2px solid"
                borderRadius="15px"
                _focusVisible={{ border: "rgba(123, 47, 198, 1) 2px solid" }}
                _hover={{ border: "rgba(123, 47, 198, 1) 2px solid" }}
            />
        </div>
    )
}

export default TextField;