// import React from 'react';
// import { useColorMode, Switch } from '@chakra-ui/react';

// const SwitchComponent = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Switch
//       colorScheme={colorMode === 'dark' ? 'purple' : 'primary'}
//       isChecked={colorMode === 'dark'}
//       onChange={toggleColorMode}
//     />
//   );
// };

// export default SwitchComponent;


import React from 'react';
import { ChakraProvider, Switch, extendTheme,useColorMode  } from '@chakra-ui/react';

import MoonIcon from '../Components/MoonIcon';


// Create a custom theme with a different color scheme for the Switch
const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors: {
    // Light mode colors
    light: {
      background: '#ffffff', // Set your custom light background color
      text: '#333333',      // Set your custom light text color
      // Add more custom light mode colors as needed
    },
    // Dark mode colors
    dark: {
      background: '#121212', // Set your custom dark background color
      text: '#ffffff',      // Set your custom dark text color
      // Add more custom dark mode colors as needed
    },
  },
  components: {
    Switch: {
      baseStyle: {
        track: { bg: 'gray.300', _checked: { bg: 'purple.300' } },
        thumb: { bg: 'white' },
      },
    },
  },
});

const SwitchComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider theme={customTheme}>
    
    <Switch defaultIsChecked size={["sm","md"]} onChange={toggleColorMode}/>
    <MoonIcon dark={colorMode === 'dark'}/>

    </ChakraProvider>
  );
};

export default SwitchComponent;
