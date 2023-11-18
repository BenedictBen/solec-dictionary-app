import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Flex flexDirection={'column'} alignItems={"center"} justifyContent={"center"} px={"20"} gap={"5"} my={"6"}>
      <Box>😕</Box>
      <Text fontSize={"lg"}>No Definitions Found</Text>
      <Text textAlign={"center"}>
      Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.
      </Text>
    </Flex>
  )
}

export default NotFound