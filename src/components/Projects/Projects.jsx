import React from "react"; // 匯入 React 模組，用於創建 React 元件

import { comments, sliderSettings } from "../../utils/data"; // 匯入來自 data.js 檔案的評論數據和滑動設定

import css from "./Projects.module.scss"; // 匯入 Projects 模組的 CSS 樣式

import Slider from "react-slick"; // 匯入 react-slick 模組，用於製作滑動效果

import { motion } from 'framer-motion'; // 匯入 framer-motion 模組，用於製作動畫效果

import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion"; // 匯入來自 motion.js 檔案的動畫變體

// 定義 Projects 元件
const Projects = () => {
  return (
    <motion.section // 使用 motion 庫的 section 元素，添加動畫效果
    variants={staggerChildren} // 設定動畫變體
    initial="hidden" // 設定初始動畫狀態
    whileInView="show" // 設定動畫播放時機
    viewport={{ once: false, amount: 0.25 }} // 設定視口
    section className={`paddings ${css.wrapper}`}> {/* CSS 樣式設定 */}

      <a className="anchor" id="projects"></a> {/* 前往評論區域的錨點 */}

      <motion.div // 使用 motion 庫的 div 元素，添加動畫效果
      variants={footerVariants} // 設定動畫變體
      className={`yPaddings innerWidth ${css.container}`}> {/* CSS 樣式設定 */}


        <div className={`flexCenter ${css.heading}`}> {/* CSS 樣式設定 */}
          <span className="primaryText">Projects</span> {/* 標題 */}
          <p style={{ marginTop: "2rem" }}> {/* 樣式設定 */}
          I'm currently diving into a diverse array of projects, from backend development 
          </p> {/* 第一個評論 */}
          <p>to cloud computing and machine learning, with exciting plans to unveil them in the near future!</p> {/* 第二個評論 */}
        </div>

        <div className={`yPaddings ${css.comments}`}> {/* CSS 樣式設定 */}
          {/* 使用 Slider 組件包裝評論數據 */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}> {/* CSS 樣式設定 */}
                  <img src={comment.img} alt="" /> {/* 顯示評論者的圖片 */}
                  <div className={css.bio}> {/* CSS 樣式設定 */}
                    <span>{comment.name}</span> {/* 顯示評論者的姓名。這裡我把它移上去當Project title */}
                    {/*<span>{comment.post}</span>*/} {/* 顯示評論者的職稱 */}
                  </div>
                  <p>{comment.comment}</p> {/* 顯示評論內容 */}
                  <div className={css.line}></div> {/* 分隔線 */}
                  
                </div>
              );
            })}
          </Slider>
        </div>

      </motion.div>

    </motion.section>
  );
};

export default Projects; // 匯出 People 元件


/* 原版未註釋
import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an appilication was quite cosy</p>
        </div>



        <div className={`yPaddings ${css.comments}`}>
          // to use slider , we have to inlcude css in index.html head 
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default People;
*/
