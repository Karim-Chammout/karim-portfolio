import { Fade } from 'react-reveal';

import profileImag from '../../assets/images/profileImag.png';
import { Button } from '../../components';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactPageData, greeting } from '../../portfolio';
import {
  ButtonWrapper,
  ContactInfo,
  H1,
  Image,
  ImgWrapper,
  SectionWrapper,
  SubHeader,
  Text,
} from './Contact.style';

const {
  contactSection: { alt_img_name, title, subHeader, description, ctaText },
} = contactPageData;

const Contact = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <SectionWrapper>
        <ImgWrapper>
          <Image src={profileImag} alt={alt_img_name} />
        </ImgWrapper>
        <ContactInfo>
          <H1>{title}</H1>
          <SubHeader>{subHeader}</SubHeader>
          <Text>{description}</Text>
          <SocialMedia />
          <ButtonWrapper>
            <Button text={ctaText} href={greeting.resumeLink} newTab />
          </ButtonWrapper>
        </ContactInfo>
      </SectionWrapper>
    </Fade>
  );
};

export default Contact;
