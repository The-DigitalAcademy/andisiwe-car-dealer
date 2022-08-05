
import { Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
 



 
     <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
