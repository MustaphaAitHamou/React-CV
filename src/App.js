import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NotAllowed from './pages/NotAllowed';

const App = () => {
  return (
    
    <div className='App'>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/competences" element={<Knowledges />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/secret" element={<NotAllowed/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>

    </div>
    
  );
};

export default App;