import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { Box, useColorModeValue } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box
      bgGradient={useColorModeValue(
        "linear-gradient(238deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        "linear-gradient(to right, #0f0c29, #302b63, #24243e)"
      )}
      height={"100vh"}
    >
      <Navbar></Navbar>
      <Hero></Hero>
    </Box>
  );
}
