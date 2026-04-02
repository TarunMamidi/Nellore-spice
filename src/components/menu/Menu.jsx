import React from "react";
import "./Menu.css";
import { motion } from "framer-motion";

import dosa1 from "../assets/img1.jpg";
import dosa2 from "../assets/img2.jpg";
import dosa3 from "../assets/img.jpg";
import dosa4 from "../assets/img1.jpg";

const menuItems = [
  { name: "Plain Dosa", price: "£2.99", img: dosa1, spicy: false },
  { name: "Onion Dosa", price: "£3.99", img: dosa2, spicy: true },
  { name: "Ghee Karam Dosa", price: "£3.99", img: dosa3, spicy: true },
  { name: "Masala Dosa", price: "£4.99", img: dosa4, spicy: false }
];

const Menu = () => {
  return (
    <div className="menu-section">
      <motion.h2
        className="menu-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🔥 Nellore Spice Specials
      </motion.h2>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <motion.div
            className="menu-card"
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.name} />

            {item.spicy && (
              <span className="spicy-badge">🌶️ Spicy</span>
            )}

            <div className="menu-content">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="cart-btn">Add to Cart 🔥</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;