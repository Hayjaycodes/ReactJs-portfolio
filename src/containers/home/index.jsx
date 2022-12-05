import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { Link } from "react-router-dom";
import myResume from "../../MyResume/Resume.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text__wrapper">
        <h1>
          Hello, I'm Joshua
          <br />
          Front End Delveloper.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <Link to={"/contact"}> Hire me </Link>
            <a href={myResume} download>
              Download resume
            </a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a
              href="https://www.linkedin.com/in/abodunrin-joshua-24b79b108/"
              target="/_blank"
            >
              {" "}
              <FaLinkedin size={32} />
            </a>
            {/* <FaLinkedin size={32}/> */}
            <a href="mailto:tanjabodunrin@gmail.com" target="/_blank">
              {" "}
              <SiGmail size={32} />
            </a>
            {/* <SiGmail size={32}/> */}
            <a
              href="https://twitter.com/Kvng_tanny?t=lPMaydwzCVJLX2-p7LakVA&s=09"
              target="/_blank"
            >
              <FaTwitter size={32} />
            </a>
            {/* <FaTwitter size={32}/> */}
            <a href="https://wa.me/2348093569511?text=hi%20" target="/_blank">
              <BsWhatsapp size={32} />
            </a>
            {/* <BsWhatsapp size={32}/> */}
            <a href="https://github.com/AJcodes155" target="/_blank">
              <AiOutlineGithub size={32} />
            </a>
            {/* <AiOutlineGithub size={32} /> */}
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
