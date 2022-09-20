import React from 'react';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className='mr-3'>
     <Link to='/about'>Home</Link> 
    </nav>
  );
};

export default Home;