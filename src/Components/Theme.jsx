// Here's the signature
// const value = useColorModeValue(lightModeValue, darkModeValue)
import {
    Box,
    Button,
    useColorMode,
    useColorModeValue,
    Icon
} from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


function StyleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    
  
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('violet', 'white')
  
    return (
      <>
        <Box mb={4} bg={bg}>
          This box's style will change based on the color mode.
        </Box>
      <Icon as={BsSearch}  color={color}/>

        <Button size='sm' onClick={toggleColorMode}>
        {colorMode === "dark" ? <FaSun /> : <FaMoon />}
          Toggle Mode
        </Button>
      </>
    )
  }

  export default StyleColorMode