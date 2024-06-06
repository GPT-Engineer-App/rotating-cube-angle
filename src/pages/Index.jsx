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
        <Box width="100px" height="100px" bg="blue.500" transform={`rotateX(${angle}deg) rotateY(${rotation}deg)`} transition="transform 0.5s" display="flex" justifyContent="center" alignItems="center" color="white" fontWeight="bold" perspective="500px" transformStyle="preserve-3d" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.3)">
          Cube
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
