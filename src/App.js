import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/work" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
