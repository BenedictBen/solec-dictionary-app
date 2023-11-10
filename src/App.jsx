import { useState } from 'react';
import Sample from './Pages/Sample';
import { Box, Container, Select, VStack, Text, Menu, MenuButton, MenuList, MenuItem, Button, IconButton} from '@chakra-ui/react';
import Theme from './Components/Theme'
import { VscChevronDown } from "react-icons/vsc";


// const fontstyle = ['serif','sans-serif','monospace'];
function App() { 
  const fontOptions = [
    'serif', 'sans-serif', 'monospace'
  ];
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  }; 
  return (
    <Box>
      Asante
<Container maxW="container.md" centerContent>
        <VStack spacing={8} marginTop={8}>
          
          <Select
            value={selectedFont}
            onChange={handleFontChange}
            width="100px"
            variant="none"
          >
            {fontOptions.map((font, index) => (
              <option width="100px" key={index} value={font}>
                {font}
              </option>
            ))}
          </Select>
          {selectedFont && (
            <Text fontSize="xl" fontFamily={selectedFont} marginTop={4}>
              This text is styled with the selected font.
            </Text>
          )}
        </VStack>
      </Container>
      {/* <Sample/> */}
    </Box>
  )
}


    




export default App
