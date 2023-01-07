import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div>
            <BsWhatsapp className="contact__icon" />
          </div>
          <h3 className="contact__title">WhatsApp</h3>
          <div className="contact__info">+91 9321114902</div>
        </div>
        <div className="contact__content">
          <div>
            <FiMail className="contact__icon" />
          </div>
          <h3 className="contact__title">Mail</h3>
          <a href="mailto:rakeshchoksi@gmail.com" className="contact__info">
            rakeshchoksi@gmail.com
          </a>
        </div>
        <div className="contact__content">
          <div>
            <BiHomeAlt className="contact__icon" />
          </div>
          <h3 className="contact__title">Address</h3>
          <div>Andheri West, Mumbai - 53</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
