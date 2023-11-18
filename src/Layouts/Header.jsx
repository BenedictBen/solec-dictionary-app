import React, { useRef } from 'react'
import play from '../assets/icons/icon-play.svg';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Header = ({ audioUrl, word, phonetic }) => {
    const ref = useRef();

    const playAudio = () => {
        ref.current.play();
    }

  return (
    <Flex flexDirection={'row'} justifyContent={"space-between"}  mt={'12'} px={"15px"}>
        <Box pl={["8px","12px","16px"]}>
        <Heading size={['xs','sm','md']}>
            {word}
        </Heading>
            <Text color={'purple.600'} fontSize={["xs","sm","md"]} mt={2}>{phonetic}</Text>
        </Box>
        <Button onClick={playAudio} height={0} w={["16","20",'28']} mt={'6'} >
            <Image src={play}/>
        </Button>
        <audio ref={ref} src={audioUrl}/>
    </Flex>
  )
}

export default Header