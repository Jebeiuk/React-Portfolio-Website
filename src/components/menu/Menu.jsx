import "./menu.scss";
import {FaHome, FaCode, FaMailBulk, FaHandshake, FaMale} from "react-icons/fa";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>

        <li  onClick={()=>setMenuOpen(false)}>
        <FaHome size ='23px'></FaHome>&nbsp;&nbsp;
          < a href="#intro">Home</a>
        </li>
        
        <li onClick={()=>setMenuOpen(false)}>
        <FaCode size ='23px'></FaCode>&nbsp;&nbsp;
          <a href="#works">Works</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
        <FaMale size ='23px'></FaMale>&nbsp;&nbsp;
          <a href="#portfolio">Portfolio</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
        <FaMailBulk size ='23px'></FaMailBulk>&nbsp;&nbsp;
          <a href="#contact">Contact</a>

    
        </li>
      </ul>
    </div>
  );
}
