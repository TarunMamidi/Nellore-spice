import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import portimg from '../assets/logo.png'

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className='logo'><img src={portimg} alt="Logo" /></div>
      <div className='menu-icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`rows ${isOpen ? 'open' : ''}`}>
        <div className='close-icon' onClick={toggleMenu}><FaTimes /></div>
        <div className='ic'>Home</div>
        <div className='ic'>Menu</div>
        <div className='ic'>About</div>
        <div className='ic'>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;