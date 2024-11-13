import React, { forwardRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
function Contact(props, ref) {
  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="main-text scroll-scale"
      >
        <span>Ask Me Question</span>
        <h2>Contact Me</h2>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        action="#"
        className="scroll-bottom"
      >
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Address" />
        <input type="number" placeholder="Phone Number" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <div className="btn-box formBtn">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}

export default forwardRef(Contact);
