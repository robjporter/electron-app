import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Text,
  VStack,
} from '@chakra-ui/react';
import icon from '../../assets/icon.svg';

const Hello = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-bl, #fedc2a -29.09%, #dd5789 51.77%, #7a2c9e 129.35%)"
    >
      <Center sx={{ pt: 28 }}>
        <VStack>
          <img width="200px" alt="icon" src={icon} />
          <Text
            color="white"
            fontSize="4xl"
            fontWeight="extrabold"
            pb="6"
            pt="1"
          >
            electron-react-boilerplate
          </Text>
          <div>
            <Button size="lg" sx={{ mr: 6 }}>
              <span role="img" aria-label="books">
                📚
              </span>{' '}
              Read our docs
            </Button>
            <Button size="lg">
              <span role="img" aria-label="books">
                🙏
              </span>{' '}
              Donate
            </Button>
          </div>
        </VStack>
      </Center>
    </Box>
  );
};

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
