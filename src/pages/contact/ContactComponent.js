import React from "react";
import { Fade } from "react-reveal";

import "./ContactComponent.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = ({ theme }) => {

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={
                  require(`../../assets/images/${ContactData.profile_image_path}`)
                    .default
                }
                alt="Karim Chammout"
                style={{ borderRadius: "50%", marginBottom: "10px" }}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <sapn
                className="contact-header-detail-text subTitle"
                style={{ fontWeight: "bold" }}
              >
                Say Hello, I won't bite... 😁
              </sapn>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {addressSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {addressSection["subtitle"]}
              </p>
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {phoneSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {phoneSection["subtitle"]}
              </p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
