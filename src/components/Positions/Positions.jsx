import React from "react"; // 匯入React庫
import { motion } from "framer-motion"; // 從framer-motion庫中匯入motion元件
import css from "./Positions.module.scss"; // 匯入本組件專用的樣式
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion"; // 匯入自定義動畫效果



const Positions = () => {
    // 定義每個職位的標題
    const jobs = [
      "Job Title 1",
      "Job Title 2",
      "Job Title 3"
    ];
  return (
    //設定觸發動畫的視窗區域比例
    <motion.section
      variants={staggerChildren} // 子元件依序出現的動畫效果 
      initial="hidden" // 初始狀態隱藏 */}
      whileInView="show" // 元素進入視窗時顯示 */}
      viewport={{ once: false, amount: 0.25 }} 
      className={`paddings ${css.wrapper}`}> {/*應用外部和模塊化CSS  */}

      {/* 創建一個錨點用於頁面導航定位 */}
      <a className="anchor" id="positions"></a>

      {/* 容器設定為內寬和居中對齊 */}
      <div className={`innerWidth flexCenter ${css.container}`}>

        {/* 使用motion.div創建具有動畫的標題區域 */}
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            {/* 主要標題 */}
            <span className="primaryText">Preferred Job Positions</span>
            {/* 描述性文本 */}
            {/*<p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>*/}
          </div>
          
        </motion.div>
        {/* 作品展示區，居中對齊 */}
        <div className={`flexCenter ${css.showCase}`}>
          {/* 個別作品圖片，附加動畫效果和延遲 */}
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="./job1.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="./job2.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./job3.png" alt="project" />
          {/*顯示角色和詳細內容*/}
        </div>
        <h1></h1>
        <h1>Software Development Engineer｜Data Scientist ｜Business Analyst</h1> 
      </div>
      
    </motion.section>
  );
};

export default Positions; // 匯出Portfolio組件


/* 原版未註釋
import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
*/

