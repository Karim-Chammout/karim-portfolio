import { Fade } from 'react-reveal';

import { Button, SocialMedia } from '../../../../components';
import { greeting } from '../../../../portfolio';
import Developer from './Developer';
import {
  ButtonWrapper,
  Content,
  H1,
  ImageWrapper,
  SocialMediaWrapper,
  Text,
  Wrapper,
} from './Greeting.style';

const Greeting = () => {
  return (
    <Fade bottom duration={2000} distance="50px">
      <Wrapper>
        <Content>
          <H1>{greeting.title}</H1>
          <Text>{greeting.subTitle}</Text>
          <SocialMediaWrapper>
            <SocialMedia />
          </SocialMediaWrapper>
          <ButtonWrapper>
            <Button text={greeting.ctaText} href={greeting.portfolio_repository} newTab />
          </ButtonWrapper>
        </Content>
        <ImageWrapper>
          <Developer />
        </ImageWrapper>
      </Wrapper>
    </Fade>
  );
};

export default Greeting;
