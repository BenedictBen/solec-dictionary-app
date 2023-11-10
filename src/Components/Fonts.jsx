// src/FontList.js
import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const FontList = ({ fonts }) => {
  return (
    <SimpleGrid columns={2} spacing={4}>
      {fonts.map((font) => (
        <Box key={font} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontFamily={font} fontSize="xl">
            {font}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default FontList;
