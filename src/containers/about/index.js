import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { CgProfile } from "react-icons/cg";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { personalData } from "./utils";
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent headerText="About Me" icon={<CgProfile size={40} />} />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Front end developer</h3>

            <p>
              My name is Abodunrin Joshua Tanimola,I'm a graduate of Computer
              Science from Coventry University,I'm a full stack developer
              dedicated in producing a responsive website. I have two years
              experience in web develepment,Prior to my current role, I worked
              on personal projects over the year. In the next 10 years, I'd like
              to move into a Senior developer. A software developer position in
              your prestige organisation would let me gain more experience with
              time management, project management, fast learning and leadership
              skills.
            </p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={55} color="var(--selected-theme-main-color)" />
              </div>

              <div>
                <FaDatabase
                  size={55}
                  color="var(--selected-theme-main-color)"
                />
              </div>

              <div>
                <DiAndroid size={55} color="var(--selected-theme-main-color)" />
              </div>

              <div>
                <FaDev size={55} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
