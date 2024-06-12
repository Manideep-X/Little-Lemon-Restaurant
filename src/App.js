import { ChakraProvider } from "@chakra-ui/react";
import Nav from './components/Nav';
import Main from './components/Main';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Chicago from "./components/Chicago";



function App() {
  return (
    <>
      <ChakraProvider>
        <main>
          <Main />
          <Homepage />
          <Footer />
        </main>
      </ChakraProvider>
    </>
  );
}

export default App;
