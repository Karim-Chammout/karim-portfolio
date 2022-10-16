import styled from 'styled-components';

import { socialMediaLinks } from '../../portfolio';
import { ThemeType } from '../../theme';
import './SocialMedia.css';

const IconWrapper = styled.span`
  i {
    background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
  }
  &:hover i {
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
          <IconWrapper {...media} theme={theme}>
            <i className={`fab ${media.fontAwesomeIcon}`} />
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default socialMedia;
