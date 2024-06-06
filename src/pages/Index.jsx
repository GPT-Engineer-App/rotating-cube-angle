import { useState } from "react";
import { Box, Button, Container, VStack } from "@chakra-ui/react";
import { FaSyncAlt } from "react-icons/fa";

const Index = () => {
  const [rotation, setRotation] = useState(0);
  const [angle, setAngle] = useState(0);

  const rotateCube = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const tiltCube = () => {
    setAngle((prevAngle) => (prevAngle === 0 ? 45 : 0));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box width="200px" height="200px" position="relative" transform={`rotateX(${angle}deg) rotateY(${rotation}deg)`} transition="transform 0.5s" transformStyle="preserve-3d" perspective="500px">
          <Box position="absolute" width="200px" height="200px" bg="blue.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="translateZ(100px)">
            Front
          </Box>
          <Box position="absolute" width="200px" height="200px" bg="red.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="rotateY(180deg) translateZ(100px)">
            Back
          </Box>
          <Box position="absolute" width="200px" height="200px" bg="green.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="rotateY(90deg) translateZ(100px)">
            Right
          </Box>
          <Box position="absolute" width="200px" height="200px" bg="yellow.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="rotateY(-90deg) translateZ(100px)">
            Left
          </Box>
          <Box position="absolute" width="200px" height="200px" bg="purple.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="rotateX(90deg) translateZ(100px)">
            Top
          </Box>
          <Box position="absolute" width="200px" height="200px" bg="orange.500" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)" transform="rotateX(-90deg) translateZ(100px)">
            Bottom
          </Box>
        </Box>
        <Button leftIcon={<FaSyncAlt />} colorScheme="teal" onClick={rotateCube}>
          Rotate
        </Button>
        <Button leftIcon={<FaSyncAlt />} colorScheme="orange" onClick={tiltCube}>
          Tilt
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
