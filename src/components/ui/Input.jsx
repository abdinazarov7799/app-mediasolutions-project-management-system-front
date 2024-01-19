import React from "react";
import {Input} from "@chakra-ui/react";

export const InputOutlined = ({...rest}) => {
  return <Input {...rest} _focus={{boxShadow: '0px 0px 2px #FFA200', borderColor: '#FFA200'}} />
}
