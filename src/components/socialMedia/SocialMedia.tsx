import './SocialMedia.css';
import { socialMediaLinks } from '../../portfolio';
import styled from 'styled-components';
import { ThemeType } from '../../theme';

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
          className={`icon-button`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} theme={theme}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default socialMedia;
