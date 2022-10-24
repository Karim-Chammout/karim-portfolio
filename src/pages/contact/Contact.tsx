import { Fade } from 'react-reveal';

import profile_image from '../../assets/images/karim_image.png';
import { Button } from '../../components';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { contactPageData, greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
import AddressImg from './AddressImg';
import './Contact.css';

const { contactSection, addressSection, phoneSection } = contactPageData;

const Contact = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="contact-main">
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
              <span
                className="contact-header-detail-text"
                style={{ fontWeight: 'bold', color: theme.secondaryText }}
              >
                Say Hello, I won't bite... 😁
              </span>
              <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
                {contactSection.description}
              </p>
              <SocialMedia />
              <div className="resume-btn-div">
                <Button text="See My Resume" href={greeting.resumeLink} newTab />
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
              <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
                {addressSection.subtitle}
              </p>
              <h1 className="address-heading-text" style={{ color: theme.text }}>
                {phoneSection.title}
              </h1>
              <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
                {phoneSection.phone_num}
              </p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  href={addressSection.location_map_link}
                  newTab
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
