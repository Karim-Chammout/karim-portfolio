import { socialMediaLinks } from '../../portfolio';
import { IconWrapper } from './SocialMedia.style';

const socialMedia = () => {
  return (
    <>
      {socialMediaLinks.map((media) => (
        <a key={media.name} href={media.link} target="_blank" rel="noopener noreferrer">
          <IconWrapper backgroundColor={media.backgroundColor}>
            <img src={media.imgSrc} alt={media.name} title={media.name} />
          </IconWrapper>
        </a>
      ))}
    </>
  );
};

export default socialMedia;
