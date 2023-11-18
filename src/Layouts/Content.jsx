import { Box, Center, Divider, Flex, ListIcon, ListItem, Text, UnorderedList, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Content = ({ selectedFont, partOfSpeech, definitions, synonyms, verb }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const contentStyles = {
    fontFamily: selectedFont
  }

  return (
    <Box px={["20px","40px"]} style={contentStyles} mb={"6"}>
      <Flex alignItems={'center'}  gap={"5"} my={"4"}>
        <Text fontWeight={"bold"} fontSize={["xs","sm","md"]}>{partOfSpeech}</Text>
        <hr className='hr'/>
      </Flex>
      <Text color={"grey"} py={"2"} fontSize={["xs","sm","md"]}>Meaning</Text>
      <UnorderedList color={"white"}  pl={"6"}>
        {definitions.map((def, index) =>(
          <ListItem key={index} color={"purple.500"}>
         
                         <Text color={colorMode === 'dark' ? 'white': 'black'}
                         fontSize={["xs","sm","md"]}>
                        {def.definition}
                        </Text>
            
            </ListItem>
        ))}
      </UnorderedList>
      {partOfSpeech === 'noun' && synonyms.length > 0 &&(
        <Box py="3">
          <Text color={"grey"} display={"flex"} gap={"3"} fontSize={["xs","sm"]}>
            Synonyms: { synonyms.map((synonym, index) =>(
              <Text key={index} color={"purple.500"} textDecoration={"underline"}>{synonym}</Text>
            ))}
          </Text>
        </Box>
      )}
      {verb && (
        <Flex>
          <Text fontSize={["xs","sm","md"]}>{definitions[0].definition}</Text>
          <hr className='hr'/>
        </Flex>
      )}
    </Box>
  )
}

export default Content