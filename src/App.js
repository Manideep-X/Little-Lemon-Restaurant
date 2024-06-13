import { ChakraProvider } from "@chakra-ui/react";
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/App.css';

function App() {
  return (
      <ChakraProvider>
        <Router>
        <main className="App">
          <Main />
          <Footer />
        </main>
        </Router>
      </ChakraProvider>
  );
}

export default App;
