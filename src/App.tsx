import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles';
import { FC } from 'react';

import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Work from './components/work/Work';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import MobileMenuPopup from './components/menu/MobileMenuPopup';
import MobileMenu from './components/menu/MobileMenu';
import LayoutWrapper from './components/layout-wrapper/LayoutWrapper';
import Footer from './components/footer/Footer';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LayoutWrapper>
          <Menu />
          <MobileMenu />
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
