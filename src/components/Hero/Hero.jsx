import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="home"></a> {/* 自己加的 */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hi There,
            <br />
            I'm Calvin.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            Stay Hungry, Stay Foolish.
            <br />
            {" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}/*tween表示線性運動，動畫的延遲時間0.3秒，動畫的持續時間1秒*/
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./Calvin.png" alt="" />
        </motion.div>
        {/*移動到header了 
        <a className={css.email} href="mailto:calvin.liu@columbia.edu">
          Contact me.
        </a>
        */}
        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./columbia1.png" alt="" />
            <span>Bachelor of </span>
            <span>Computer Science</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
