import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Campaign from './components/Campaign';
import News from './components/News';
import Footer from './components/Footer';
import Donate from './components/Donate';

const App = function () {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/news" element={<News />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
