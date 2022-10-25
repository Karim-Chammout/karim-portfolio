import { Fade } from 'react-reveal';

import profile_image from '../../assets/images/karim_image.png';
import { Button } from '../../components';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactPageData, greeting } from '../../portfolio';
import AddressImg from './AddressImg';
import {
  ButtonWrapper,
  ContactInfo,
  H1,
  H4,
  Image,
  ImgWrapper,
  InfoWrapper,
  SectionWrapper,
  SubHeader,
  Text,
} from './Contact.style';

const { contactSection, addressSection, phoneSection } = contactPageData;

const Contact = () => {
  return (
    <>
      <Fade bottom duration={1000} distance="40px">
        <SectionWrapper>
          <ImgWrapper>
            <Image src={profile_image} alt={contactSection.alt_img_name} />
          </ImgWrapper>
          <ContactInfo>
            <H1>{contactSection.title}</H1>
            <SubHeader>{contactSection.subHeader}</SubHeader>
            <Text>{contactSection.description}</Text>
            <SocialMedia />
            <ButtonWrapper>
              <Button text={contactSection.ctaText} href={greeting.resumeLink} newTab />
            </ButtonWrapper>
          </ContactInfo>
        </SectionWrapper>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <SectionWrapper isSecondSection>
          <ImgWrapper>
            <AddressImg />
          </ImgWrapper>
          <InfoWrapper>
            <H4>{addressSection.title}</H4>
            <Text>{addressSection.subtitle}</Text>
            <H4>{phoneSection.title}</H4>
            <Text>{phoneSection.phone_num}</Text>
            <ButtonWrapper>
              <Button
                text={addressSection.ctaText}
                href={addressSection.location_map_link}
                newTab
              />
            </ButtonWrapper>
          </InfoWrapper>
        </SectionWrapper>
      </Fade>
    </>
  );
};

export default Contact;
