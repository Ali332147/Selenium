/* eslint-disable jsx-a11y/no-distracting-elements */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Selenium from './Components/Selenium';
import Navbar from './Navbar';

function App() {
  return (
    <div className=''>
       <Navbar></Navbar>
       <marquee className="text-xl sm:font-bold  text-black bg-slate-300 pb-1 uppercase"><span className='text-primary'> I am not a Master  </span>  || <span className='text-primary'>always student </span>  || <span className='text-primary'> but I always try to reach knowledge  </span> ||  <span className='text-primary'>Make something different</span></marquee>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="selenium" element={<Selenium />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
