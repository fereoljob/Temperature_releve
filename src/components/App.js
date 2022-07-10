
import '../styles/App.css';
import Temperatures from '../pages/Temperatures.js';
import Variations from '../pages/Variations.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temperatures />} />
        <Route path="/Variations" element={<Variations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
