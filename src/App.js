import './App.css';
import Header from './stable-components/Header.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Footer from './stable-components/Footer';

function App() {
  return (
    <div className="App bg-gray-800 text-white">
      <Header/> 
      <div className='container mx-auto mob:px-8 des:px-10 pt-7r'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
       {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
