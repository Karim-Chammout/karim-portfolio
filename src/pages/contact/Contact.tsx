import { Fade } from 'react-reveal';

import profileImag from '../../assets/images/profileImag.png';
import { Button } from '../../components';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactPageData } from '../../portfolio';
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

const { altImgName, title, subHeader, description, ctaText, resumeLink } = contactPageData;

const Contact = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <SectionWrapper>
        <ImgWrapper>
          <Image src={profileImag} alt={altImgName} />
        </ImgWrapper>
        <ContactInfo>
          <H1>{title}</H1>
          <SubHeader>{subHeader}</SubHeader>
          <Text>{description}</Text>
          <SocialMedia />
          <ButtonWrapper>
            <Button text={ctaText} href={resumeLink} newTab />
          </ButtonWrapper>
        </ContactInfo>
      </SectionWrapper>
    </Fade>
  );
};

export default Contact;
