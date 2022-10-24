import styled from 'styled-components';

import { socialMediaLinks } from '../../portfolio';
import { ThemeType } from '../../theme';
import './SocialMedia.css';

const IconWrapper = styled.span`
  img {
    background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
    height: 40px;
    width: 40px;
    margin: 0 5px;
    padding: 8px;
    border-radius: 25%;
  }
  img:hover {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const socialMedia = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => (
        <a
          key={media.name}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper backgroundColor={media.backgroundColor} theme={theme}>
            <img src={media.imgSrc} alt={media.name} />
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default socialMedia;
