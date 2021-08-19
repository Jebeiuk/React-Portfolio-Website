import { useState } from "react";
import "./works.scss";
import {FaArrowAltCircleLeft,FaArrowAltCircleRight, FaArrowDown, FaArrowUp,FaDirections } from "react-icons/fa";

import {motion} from 'framer-motion'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/cert.png",
      title: "Skills",
      desc:
        "I'm a lifelong learner and enjoy developing my skills. Below are some programming languages, toolkits, frameworks and libraries that I am currently working with.",
      src: "assets/person.code.jpeg",
      skills: "HTML - CSS - Sass - Javascript - React - Bootstrap - MySQL - Node - MongoDB - Express - Github",
      
    },
    {
      id: "2",
      icon: "./assets/sass.png",
      title: "My Portfolio",
      desc:
        "I created my portfolio using React which is an open-source JavaScript library that I enjoy due to its simplicity and rich user-interfaces. I also used Sass which is a scripting language that I used to design the layout.",
      src:"assets/reacts.png",
      skills: "React - Sass",
      project:  <a href="#intro"><button>Portfolio</button></a>

     
        
    },   
    {
      id: "3",
      icon: "",
      title: "Blog Website",
      desc:
        "I created a fully authenticated, dynamically updating blogging website to create posts that share my thoughts, ideas, and experiences. Below are the main software programs used to create the blogging website.",
      src:"assets/blog.jpeg",
      skills: "React -  MongoDB - Express - Node",
      project:  <a href="#portfolio"><button>Blog</button></a>
        
    },
    {
      id: "4",
      icon: "./assets/Logo.png",
      title: "Dawnbreakers Website",
      desc: "Long Eaton Dawnbreakers is Rotary group that networks and organises events to raise money for local and international causes. I created a website for their members as an ongoing project.",
      src: "assets/rotarys.jpg",
      skills: "React - Bootstrap" ,
      project:  <a href="#portfolio"><button>Rotary</button></a>
    },
 





  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
                <div className="right">
             
                <img src={d.src} alt="" />
              </div> 
              
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <ul>
                    <li>{d.skills}</li>
                  </ul>
                  <a> {d.project}
                 
                </a>
             
                </div>
              </div>
    
            </div>
          </div>
        ))}
      </div>
                        <motion.div className="arrow left"     whileHover={{scale: 1.3}}>
                        <FaArrowAltCircleLeft size ='45px' style={{padding: '1%'  }}
                         onClick={() => handleClick("left")} />
                        </motion.div> 
                       
                        <motion.div className="arrow right"     whileHover={{scale: 1.3}}>
                        <FaArrowAltCircleRight size ='45px' style={{padding: '1%' }}
                         onClick={() => handleClick("right")} />
                        </motion.div> 
                       
                        <motion.div className="arrow bottom " whileHover={{scale: 1.3}}>
                          <a href="#portfolio" >   
                        <FaArrowDown size ='45px' style={{padding: '1%'}} color="rgb(57, 202, 212)" />
                          </a>
                        </motion.div> 

                        <motion.div className="arrow top " whileHover={{scale: 1.3}}>
                          <a href="#intro" >   
                        <FaArrowUp size ='45px' style={{padding: '1%'}} color="rgb(57, 202, 212)" />
                          </a>
                        </motion.div> 
    </div>        
    
    
  );
}
