import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-section">

      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        📞 Get in Touch
      </motion.h1>

      <div className="contact-container">

        <div className="contact-info">
          {["📍 Derby, UK", "📞 +44 123 456 7890", "📧 info@nellore.com"].map((item, i) => (
            <motion.div
              className="info-card"
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input placeholder="Your Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send 🔥</button>
        </motion.form>

      </div>
    </div>
  );
};

export default Contact;