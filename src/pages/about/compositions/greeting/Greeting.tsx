import { Fade } from 'react-reveal';

import { Button } from '../../../../components';
import SocialMedia from '../../../../components/SocialMedia/SocialMedia';
import { greeting } from '../../../../portfolio';
import { ThemeType } from '../../../../theme';
import FeelingProud from './FeelingProud';
import './Greeting.css';

const Greeting = ({ theme }: { theme: ThemeType }) => {
  return (
    <Fade bottom duration={2000} distance="50px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p className="greeting-text-p" style={{ color: theme.secondaryText }}>
                {greeting.subTitle}
              </p>
              <div className="social-media-icons">
                <SocialMedia />
              </div>
              <div className="portfolio-repo-btn-div" style={{ marginTop: '20px' }}>
                <Button text="Follow Me On GitHub" href={greeting.portfolio_repository} newTab />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
