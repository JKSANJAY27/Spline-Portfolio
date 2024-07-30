import React from 'react';
import './App.css'; // Example CSS file for styling
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
      />
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;