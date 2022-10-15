import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Splash.css';
import LoaderLogo from '../../components/Loader/LoaderLogo';
import { ThemeType } from '../../theme';

function AnimatedSplash({ theme }: { theme: ThemeType }) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.text }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

const Splash = ({ theme }: { theme: ThemeType }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 5300);

    // @ts-ignore
    return () => clearTimeout();
  }, []);

  return <>{redirect ? <Redirect to="/home" /> : <AnimatedSplash theme={theme} />}</>;
};

export default Splash;
