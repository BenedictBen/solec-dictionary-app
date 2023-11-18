import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
// import window from '../assets/icons/icon-new-window.svg'

const Footer = () => {
  return (
    <Box px={["20px","40px"]} my={"8"}>
      <hr style={{marginTop: '12px'}}/>
      <Flex gap={"3"} mt={"6"}>
        <Text fontSize={["xs","sm"]} color={"grey"} textDecoration={"underline"} textDecorationLine={"grey"}>
          Source
        </Text>
        <Box>
          <Text>
            <Link display={"flex"} alignItems={"center"} gap={["1","3"]}>
              <Text fontSize={['xs','sm',"md"]}>
               https://en.wiktionary.org/wiki/keyboard
              </Text>
             <Icon as={BsBoxArrowUpRight} boxSize={['12px','16px']}/>
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer