import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ color: "black" ,fontStyle:"italic",fontSize:"2rem"}}>dineshellavula@gmail.com</span>
        <div className="f-icons">
         <a href=" https://www.instagram.com/dineshkumar_mudhiraj/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
         <Insta color="white" size={"3rem"} />
          </a> 

          <a href="" target="_blank">
          <Facebook color="white" size={"3rem"} />

          </a>
          <a href="" target="_blank">
          <Gitub color="white" size={"3rem"} />

          </a>
          <a href="" target="_blank">
          <Linkedin color="white" size={"3rem"} />

          </a>
          <a href="" target="_blank">
          <Twitter color="white" size={"3rem"} />

          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
