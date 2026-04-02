import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {

const [navTheme,setNavTheme] = useState("light");

  return (
    <div className="App">
      <Navbar theme={navTheme}/>
      <Hero setNavTheme={setNavTheme}/>
      <Menu/>
      <About/>
      <Contact/>
     
      
    </div>
  );
}

export default App;
