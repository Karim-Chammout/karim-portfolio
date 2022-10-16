import { Fade } from 'react-reveal';

import profile_image from '../../assets/images/karim_image.png';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import TopButton from '../../components/topButton/TopButton';
import { contactPageData, greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
import AddressImg from './AddressImg';
import './ContactComponent.css';

const { contactSection, addressSection, phoneSection } = contactPageData;

const Contact = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={profile_image}
                alt="Karim Chammout"
                style={{ borderRadius: '50%', marginBottom: '10px' }}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text" style={{ color: theme.text }}>
                {contactSection.title}
              </h1>
              <span className="contact-header-detail-text subTitle" style={{ fontWeight: 'bold' }}>
                Say Hello, I won't bite... 😁
              </span>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactSection.description}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button text="See My Resume" href={greeting.resumeLink} theme={theme} newTab />
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
              <h1 className="address-heading-text" style={{ color: theme.text }}>
                {addressSection.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {addressSection.subtitle}
              </p>
              <h1 className="address-heading-text" style={{ color: theme.text }}>
                {phoneSection.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {phoneSection.subtitle}
              </p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  href={addressSection.location_map_link}
                  theme={theme}
                  newTab
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
