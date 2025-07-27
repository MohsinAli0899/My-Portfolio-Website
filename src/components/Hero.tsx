import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.scss";

const Hero = () => {
  const handleDone = () => {};
  const handleType = () => {};

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title">
              <span className="hero-title-block">Hi, I'm</span>
              <span className="hero-title-highlight">
                <Typewriter
                  words={["Mohsin Ali", "A Software Developer", "An Engineer"]}
                  loop={25}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate and results-driven developer with hands-on experience in
            building seamless, responsive, and engaging web and mobile
            applications. Proficient in React.js, React Native, and Flutter,
            with a strong focus on creating intuitive user interfaces, smooth
            performance, and scalable architecture. Committed to delivering
            high-quality digital experiences across platforms.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
