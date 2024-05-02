import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { SiPython } from "react-icons/si";//新增
import { AiFillDatabase } from "react-icons/ai";//新增
import { FaChartPie } from "react-icons/fa";//新增
import { FaChartBar } from "react-icons/fa";//新增
import { FaCloud } from "react-icons/fa";//新增

export const projectExperience = [
  {
    name: "Programming Language",
    //projects: 76,
    description: "Python, Java, C/C++, R, JavaScript",//新增
    icon: AiFillDatabase,
    bg: "#990000",
  },
  {
    name: "Frontend Development",
    //projects: 63,
    description: "HTML, CSS/SCSS, JavaScript, React.js, jQuery, Bootstrap, Git",//新增
    icon: FaChartPie,
    bg: "#e77500",
  },
  {
    name: "Backend Development",
    //projects: 47,
    description:"Node.js, MySQL, PostgreSQL, MongoDB, Redis, Express.js, Spring Boot",//新增
    icon: FaChartBar,
    bg: "#FDB515",
  },
  {
    name: "Machine Learning & Data Analysis",
    //projects: 47,
    description:"MySQL, Scikit-learn, TensorFlow, Keras, PyTorch, Pandas, NumPy, Seaborn, Matplotlib",//新增
    icon: SiPython,
    bg: "#003262",
  },
  {
    name: "Cloud Computing",
    //projects: 47,
    description:"AWS, Google Cloud, Azure",//新增
    icon: FaCloud ,
    bg: "#9BCBEB",
  },
];

export const WhatDoIHelp = [
  "Hi, I'm Calvin, a skilled Computer Science student at Columbia University with 3 years of experience in frontend development and data science.  I'm graduating in May and seeking roles in Software Development Engineer, Data Scientist, and Business Analyst.",
  "Over three years of web development have equipped me with the ability to craft dynamic interfaces using HTML, CSS, JavaScript, and various JavaScript libraries and frameworks such as React.js. Additionally, I have experience in backend development using Python, Java, and Node.js to implement robust backend solutions.",
  "My internships have refined my skills in machine learning and data analysis, where I've worked extensively with tools such as Scikit-learn, TensorFlow, and PyTorch. I also have experience working in cloud environments like AWS and Google Cloud. ",
];
export const workExp = [
  {
    place: "F-Time Tech Company",
    //tenure: "Aug 2014 - Sep 2016",//原版日期
    role: "Front-End Engineer",
    detail:
      "Developed and managed the company website, utilizing HTML, CSS, JavaScript, jQuery, Bootstrap, and ReactJS to optimize user experience and functionality. Refined MLR, SVM, and CNN models with Scikit-learn on AWS, achieving 65% accuracy for Bitcoin forecasting and 55% for altcoins.",
      
  },
  {
    place: "O-Bank",
    //tenure: "Aug 2014 - Sep 2016",//原版日期
    role: "Data Scientist Intern",
    detail:
      "Built and trained a machine learning model to estimate loan applicants' risk scores, repayment probability, and repayment speed based on various factors, such as credit history, and credit bureau data. Developed over 50 sophisticated data visualizations using Tableau and Python’s analytical libraries—including Pandas, NumPy, Matplotlib, and Seaborn.",
  },
  {
    place: "Bank & Quantitative Solutions LLC",
    //tenure: "Aug 2014 - Sep 2016",//原版日期
    role: "Machine Learning Engineer Intern",
    detail:
      "Crafted machine learning models in Python using TensorFlow and PyTorch for cryptocurrency trend analysis and forecasting. Utilized SQL and MongoDB for data querying and analysis, as well as R for statistical analysis, to extract detailed information for cost estimation, production planning, and scheduling project execution dates.",
  },
];

export const comments = [
  {
    name: "Machine Learning Heart Failure Mortality Prediction Project",//Project Name 1
    //post: "Creative Manager", //原版職稱
    comment:// 專案描述
      "Deployed Scikit-learn and TensorFlow-based ML models to predict in-hospital mortality among heart failure patients , involving the analysis of over 500 ICU cases and 10,000 patient records.",
    img: "./project1.png",
  },
  {
    name: "Deep Convolutional Generative Adversarial Network (DCGAN) Project",//Project Name 2
    //post: "Creative Manager",//原版職稱
    comment:// 專案描述
      "Implemented DCGAN on the MNIST dataset using PyTorch, designing the generator and discriminator with CNNs, and leveraging the competitive interplay between them to produce lifelike images.",
    img: "./project2.png",
  },
  {
    name: "Immersive Responsive Personal Website",//Project Name 3
    //post: "Creative Manager",//原版職稱
    comment:// 專案描述
      "Designed a sophisticated responsive website featuring dynamic user interfaces and immersive interactive experiences, utilizing advanced front-end technologies including React, SCSS, JavaScript, and HTML5 to deliver a seamless and robust online presence.",
    img: "./project3.png",
  },
  ////////////////////以下重複
  {
    name: "Machine Learning Heart Failure Mortality Prediction Project",//Project Name 1
    //post: "Creative Manager", //原版職稱
    comment:// 專案描述
      "Deployed Scikit-learn and TensorFlow-based ML models to predict in-hospital mortality among heart failure patients , involving the analysis of over 500 ICU cases and 10,000 patient records.",
    img: "./project1.png",
  },
  {
    name: "Deep Convolutional Generative Adversarial Network (DCGAN) Project",//Project Name 2
    //post: "Creative Manager",//原版職稱
    comment:// 專案描述
      "Implemented DCGAN on the MNIST dataset using PyTorch, designing the generator and discriminator with CNNs, and leveraging the competitive interplay between them to produce lifelike images.",
    img: "./project2.png",
  },
  {
    name: "Immersive Responsive Personal Website",//Project Name 3
    //post: "Creative Manager",//原版職稱
    comment:// 專案描述
      "Designed a sophisticated responsive website featuring dynamic user interfaces and immersive interactive experiences, utilizing advanced front-end technologies including React, SCSS, JavaScript, and HTML5 to deliver a seamless and robust online presence.",
    img: "./project3.png",
  },
  /* 
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  */
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
