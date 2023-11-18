import { Box, Flex, HStack, Image, useColorMode, Divider, Center, Icon, Text,extendTheme  } from '@chakra-ui/react';
import React,{useState} from 'react';
import Logo from '../assets/icons/logo.svg';
import { VscChevronDown } from "react-icons/vsc";
import '../App.css'; // Create a CSS file for styling
import SwitchComponent from '../Components/Switch';




const Navbar = ({onFontChange}) => {
  // const [backgroundColor, setBackgroundColor] = useState('black');

  // // Determine text color based on the background color
  // const textColor = backgroundColor === 'black' ? 'white' : 'black';

  // const [isSelected, setIsSelected] = useState(theme === 'dark');


  const { colorMode, toggleColorMode } = useColorMode()

    const [fontStyles] = useState([
        'Serif',
        'Sans-serif',
        'Monospace'
      ]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(fontStyles[0]);
  
  
    const handleSelect = (font) => {
      setSelectedOption(font);
      setIsOpen(false);
      onFontChange(font)
    };

  return (
    <Flex alignItems={'center'} justifyContent={"space-between"} px={["20px","40px"]} py={["20px","40px"]}>
        <Box>
            <Image src={Logo} alt='logo' width={["6","8","9"]}/>
       
        </Box>
        <HStack spacing={"4"}>
        <Box className="dropdown-container" alignItems={"center"}>

        <Text className="dropdown-header" fontSize={["xs","sm","md"]} onClick={() => setIsOpen(!isOpen)} fontWeight={'bold'} >
        {selectedOption}
        {/* <i className={`arrow ${isOpen ? 'up' : 'down'}`} /> */}
        <Icon as={VscChevronDown} className={`arrow ${isOpen ? 'up' : 'down'}`} color={"purple"}/>
      </Text>
          
      {isOpen && (
        <div className="dropdown-list">
          {fontStyles.map((font, index) => (
            <Text key={index} fontSize={["xs","sm","md"]} className="dropdown-item" bg={colorMode === 'light' ? 'white': 'black'}  onClick={() => handleSelect(font)}>
              {font}
            </Text>
          ))}
        </div>
      )}
    </Box>
    <Center height='30px' bg={"white"}>
        <Divider orientation='vertical' color={"white"}/> 
    </Center>
    <Flex gap={2} alignItems={"center"}>
    <SwitchComponent/>
    </Flex>
        </HStack>
    </Flex>
  )
}

export default Navbar