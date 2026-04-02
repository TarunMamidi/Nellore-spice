import React, { useEffect } from "react";
import "./Hero.css";

const Hero = ({ setNavTheme }) => {

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero").offsetHeight;

      if (window.scrollY < heroHeight - 80) {
        setNavTheme("light");
      } else {
        setNavTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavTheme]);

  return (
    <div className="hero">
      <iframe
        src="/videon.html"
        title="Nellore Spice Animation"
        className="hero-video"
        scrolling="no"
      />

      {/* <div className="hero-overlay">
        <h1>Nellore Spice</h1>
        <p>Authentic South Indian Flavours</p>
      </div> */}
    </div>
  );
};

export default Hero;