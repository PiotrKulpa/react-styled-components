import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles';
import { FC, useEffect, useState } from 'react';

import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Work from './components/work/Work';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import LayoutWrapper from './components/layout-wrapper/LayoutWrapper';
import Footer from './components/footer/Footer';

const App: FC = () => {
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LayoutWrapper>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </LayoutWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
