import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import './style.scss'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />

      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <form action="https://formsubmit.co/tanjabodunrin@gmail.com" method="POST">
          
          
        <div className="contact__content__form">
         

          <div className="contact__content__form__controlsWrapper">

        

          <div className="nameWrapper">
          <input type="hidden" name="_subject" value="MY BOSS WANNA TALK!"/>
            <input name="name" className="inputName" type="text" required/>
            <label htmlFor="name" className="nameLabel">
              Name
            </label>
          </div>
          <div className="emailWrapper">
            <input name="email" className="inputEmail" type="text"  required/>
            <label htmlFor="email" className="emailLabel">
              Email
            </label>
          </div>
          <div className="descriptionWrapper">
            <textarea
              name="description"
              className="description"
              type="text"
              rows="5"
              required
              style={{ resize: "none" }}
            />
            <label htmlFor="description" className="descriptionLabel">
              Description
            </label>
          </div>
          </div>

          <button type="submit" formTarget="_/blank">Submit</button>

          
        </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
