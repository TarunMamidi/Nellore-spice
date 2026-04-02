import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-section">

      <div className="about-grid">

        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          🌶️
          <h1>
            About <br /> Nellore <br /> Spice
          </h1>
        </motion.div>

        {/* CENTER */}
        <motion.div
          className="about-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p>
            Welcome to Nellore Spice — where authentic South Indian flavors come alive.
            Every dish is crafted with tradition, spice, and love.
          </p>

          <p>
            From crispy dosas to rich curries, we bring you a taste that feels like home.
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="about-right">
          {["🔥 Authentic", "🌶️ Spicy", "🍛 Traditional", "❤️ Fresh"].map((item, i) => (
            <motion.div
              className="about-card"
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default About;