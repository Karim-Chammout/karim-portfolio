import { Fade } from 'react-reveal';

import Button from '../../components/button/Button';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { greeting } from '../../portfolio';
import { ThemeType } from '../../theme';
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
              <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Follow Me On GitHub"
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                  newTab
                />
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
