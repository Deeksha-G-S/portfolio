import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.jsx'
import Navbar from "./components/Navbar/Navigation.jsx";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About/index.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  

  return (
 <>
 <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar/>
        <Body>
          <About/>
          <Skills />
          <Experience />
          <Projects/>
          <Education />
            <Contact />
            <Footer />
        </Body>
      </Router>
    </ThemeProvider>
 </>
  
  );
}

export default App;


