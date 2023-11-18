import { Box, FormControl, Icon, Input,InputRightElement, InputGroup, useColorMode  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import Content from './Content';
import Header from './Header';
import Footer from '../Layouts/Footer';
import NotFound from '../Layouts/NotFound'

const Search = ({  selectedFont ,onFontChange }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [word, setWord] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('')

  const searchWord = async () => {
    if (word.trim() === '') {
        setError('Whoops, can’t be empty...');
        return;
    }
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
    if (response.ok) {
        const data = await response.json();
        setResults(data[0]);
        setError('');
    } else {
        setResults([]);
        setError('');
    }
};

  const handleInputChange = (e) => {
    setWord(e.target.value);
    setError('')
  }


  return (
    <Box >
        
            <FormControl>
                <InputGroup display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Input 
                value={word}  
                placeholder={error ? '' : 'Search for any word...'} 
                width={"93vw"} 
                bg={colorMode === "light" ? "gray.100" : "gray.700"}  
                focusBorderColor="purple.600" 
                size={["sm","md",'lg' ]}
                borderRadius={"12px"} 
                fontWeight={"bold"} 
                fontSize={["xs","sm","md"]}
                onChange={handleInputChange}/>
                <InputRightElement marginRight={["6px","20px","40px","48px"]}>    
                  <Icon as={BsSearch} boxSize={["16px","20px"]}  color={"purple.600"} cursor={"pointer"} onClick={searchWord}/>
                </InputRightElement>

                </InputGroup>
                <Box mt={'2'}
                color={'red.200'}>
                  {error}
                </Box>

            </FormControl>

            {results ? (
              <>
             { results.meanings && results.meanings.length > 0 ?(
              <Header 
              audioUrl={results.phonetics[0].audio}
              word={word}
              phonetic={results.phonetics[0].text}/>
             ): null}
             {results.meanings && results.meanings.length > 0 ? (
                        results.meanings.map((content, index) => {
                            return <Content {...content} selectedFont={selectedFont} key={index} />;
                        })
                    ) : (
                        <NotFound />
                    )}
                    <Footer/>
              </>
            ) : null}
        
    </Box>
  )
}

export default Search