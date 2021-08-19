import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import {FaArrowDown} from "react-icons/fa";


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Freelance Developer", "Designer", "Content Creator", "All-round super guy!"],
    });
  }, []);


    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src="assets/light.jpeg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Simon Garavan</h1>
              <h3>
               <span ref={textRef}></span>
              </h3>
            </div>
            <a href="#works">
              <FaArrowDown size ='55px' style={{padding: '1%' }}className="arrows" />
            
            </a>
          </div>
        </div>
      );
    }
    