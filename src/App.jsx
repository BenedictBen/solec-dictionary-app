import React,{ useState } from 'react';
import { Box, CSSReset} from '@chakra-ui/react';
import Navbar from './Layouts/Navbar';
import Search from './Layouts/Search';



// const fontstyle = ['serif','sans-serif','monospace'];
function App() { 
  const [fontStyles] = useState(['Serif','Sans-serif','Monospace']);
  const [selectedFont, setSelectedFont] = useState(fontStyles[0]);

  const handleFontChange = (font) => {
    setSelectedFont(font);
};

  return (
  
    <Box >
      <CSSReset/>
    <Navbar onFontChange={handleFontChange}/>
    <Search selectedFont={selectedFont} onFontChange={setSelectedFont}/>
    
    </Box>
    
    
  )
}


    




export default App
