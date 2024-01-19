import React from "react";
import {Button} from "@chakra-ui/react";

export const ButtonFilled = ({children,...rest}) => {
    return <Button
        color={"white"}
        bg={"#FFA200"}
        border={'1px solid transparent'}
        _hover={{background: "#FFA200B5"}}
        fontSize={'14px'}
        fontWeight={400}
        {...rest}>
        {children}
    </Button>
}

export const ButtonOutlined = ({children,...rest}) => {
    return <Button
        color={"#FFA200"}
        border={'1px solid #FFA200'}
        background={"transparent"}
        _hover={{background: "#FFA200",color: '#fff'}}
        fontSize={'14px'}
        fontWeight={400}
        {...rest}>
        {children}
    </Button>
}
