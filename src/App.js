/* eslint-disable jsx-a11y/no-distracting-elements */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Selenium from './Components/Selenium';
import Navbar from './Navbar';

function App() {
  return (
    <div className=''>
       <Navbar></Navbar>
       <marquee className="text-xl sm:font-bold text-primary bg-slate-300 pb-1 uppercase">I am not a Master || only student  ||  but I always try to make knowledge  ||  Make difference something</marquee>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="selenium" element={<Selenium />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
