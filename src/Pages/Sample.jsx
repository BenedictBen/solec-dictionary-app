import React from 'react'
import {
 IconButton, Box, useColorMode, Icon
  } from "@chakra-ui/react";
  import { FaMoon, FaSun } from "react-icons/fa";
  import { BsSearch } from "react-icons/bs";
  
const Sample = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box>
        <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
      <Icon as={BsSearch}  icon={colorMode === "dark" ? 'purple' :  'white'}/>
    </Box>
    
  )
}

export default Sample