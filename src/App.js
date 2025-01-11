import './App.css';
import Header from './stable-components/Header.js'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/connect-me';

import Footer from './stable-components/Footer';

function App() {
  return (
    
    <div className="App bg-gray-800 text-white">
      <Header/> 
      <div className='container mx-auto mob:px-8 des:px-10 pt-7r'>
        
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/connect" element={<Contact />} />
          </Routes>
        
     
      </div>
      <Footer/>
    </div>
  );
}

export default App;
