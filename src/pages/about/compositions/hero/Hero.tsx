import { Fade } from 'react-awesome-reveal';

import ProgrammerSVG from '../../../../assets/ProgrammerSVG';
import { Button, SocialMedia } from '../../../../components';
import { about } from '../../../../portfolio';
import {
  ButtonWrapper,
  Content,
  H1,
  ImageWrapper,
  SocialMediaWrapper,
  Text,
  Wrapper,
} from './Hero.style';

const { title, subTitle, ctaText, githubLink } = about;

const Hero = () => {
  return (
    <Fade duration={1000}>
      <Wrapper>
        <Content>
          <H1>{title}</H1>
          <Text>{subTitle}</Text>
          <SocialMediaWrapper>
            <SocialMedia />
          </SocialMediaWrapper>
          <ButtonWrapper>
            <Button text={ctaText} href={githubLink} newTab />
          </ButtonWrapper>
        </Content>
        <ImageWrapper>
          <ProgrammerSVG />
        </ImageWrapper>
      </Wrapper>
    </Fade>
  );
};

export default Hero;
