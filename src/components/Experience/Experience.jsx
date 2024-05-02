// 匯入React庫，用於建立組件和處理UI
import React from "react";

// 匯入工作經驗資料從工具資料夾中
import { workExp } from "../../utils/data";

// 匯入本組件專用的樣式，使用CSS模塊技術確保樣式的封裝
import css from "./Experience.module.scss";

// 從framer-motion庫中匯入motion元素，用於添加動畫
import { motion } from 'framer-motion';

// 匯入自定義動畫效果，這些動畫設定存放在工具資料夾
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

// 定義Work組件，這是一個無狀態的功能性組件
const Experience = () => {
  return (
    // 使用motion.section替代原生section標籤以便添加動畫效果
    <motion.section 
      variants={staggerChildren} // 指定子元素依序顯示的動畫效果
      initial="hidden" // 初始狀態設為隱藏
      whileInView="show" // 在視圖中時顯示
      viewport={{ once: false, amount: 0.25 }} // 設定視圖相關參數，元素進入視圖25%時觸發動畫
      className={`paddings ${css.wrapper}`}> {/*使用外部傳入的padding樣式和本地封裝樣式*/}

      {/*工作區段的錨點，用於頁面導航定位*/}
      <a className="anchor" id="experience"></a>

      {/*使用動態類名來設置元素的樣式，innerWidth表示元素寬度設為100%，flexCenter表示元素內容水平居中，${css.container}則是從外部引入的樣式表中的container樣式*/}
      <div className={`innerWidth flexCenter ${css.container}`}>
        {/*/顯示專業經驗的標題*/}
        <span className="primaryText yPaddings">Professional Experience</span>

        {/*包裹工作經驗列表的div，設定為中心對齊*/}
        <div className={`flexCenter ${css.experiences}`}>
          {/*使用map函數渲染每一筆工作經驗*/}
          {workExp.map((exp, i) => {
            return (
              // 使用motion.div添加動畫，每個工作經驗項目獨立設定動畫效果和鍵值
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                {/*顯示工作地點和任期*/}
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                {/*顯示角色和詳細內容*/}
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          {/*使用動畫元素包裹進度條，套用縮放動畫效果*/}
          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            {/*使用動畫元素包裹線條，並套用淡入動畫效果*/}
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            {/*顯示三個圓形進度指示器，不同顏色表示不同狀態或分類*/}
            <div><div className={css.circle} style={{background: "#23e0f3"}}></div></div>
            <div><div className={css.circle} style={{background: "#17cc8d"}}></div></div>
            <div><div className={css.circle} style={{background: "#82e62a"}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

// 將Work組件匯出，使其可以在其他文件中被引用
export default Experience;


/* 原版未註釋：
import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
const Work = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        // heading 
        <span className="primaryText yPaddings">Professional Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}


          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;
*/