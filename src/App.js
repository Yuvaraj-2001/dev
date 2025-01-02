import './App.css';
import Header from './stable-components/Header.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <div className="App bg-gray-800 text-white">
      <Header/> 
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
