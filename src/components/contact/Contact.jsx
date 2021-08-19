import { useState } from "react";
import "./contact.scss";
import {FaGithub, FaLinkedin,} from "react-icons/fa";
import {motion} from 'framer-motion'



export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/robot.jpeg" alt="" />




      </div>
      <div className="right">
        <h2>Contact</h2>        <div className="contactIcons" >
                
                
                <div>
                <motion.div whileHover={{scale: 1.3}}>
                <FaGithub color='black' size ='45px' style={{padding: '1%' }}
                onClick={handleURL('https://github.com/Jebeiuk')} />
                </motion.div>&nbsp;&nbsp;&nbsp;Github 
               </div>

                <div>
                <motion.div whileHover={{scale: 1.3}}>
                <FaLinkedin size ='45px' style={{padding: '1%' }}
                onClick={handleURL('https://www.linkedin.com/in/simon-garavan-299a33172/')} />
                </motion.div> 
                &nbsp;&nbsp;Linkedin
                </div>

            </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="This form is temporarily unavailable. Please email sigaravan@hotmail.com"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        
      </div>
    </div>
  );
}
