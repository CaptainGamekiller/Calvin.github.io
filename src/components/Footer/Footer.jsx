import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          
          <span className="primaryText">
            {/*這裡原本有自但我先刪了，留空行*/}<br /> 
          </span>
          
          <span className="primaryText">
            <a href="mailto:calvin.liu@columbia.edu">Claim Your Reward Now!</a>
          </span>
          {/*實現空行*/}
          <span className="primaryText">
            {/*這裡原本有自但我先刪了，留空行*/}<br /> <br /> 
          </span>
        </div>
        {/*
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
        */}
      </motion.div>
    </motion.section>
  );
};

export default Footer;
