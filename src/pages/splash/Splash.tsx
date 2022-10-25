import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import LoaderLogo from '../../components/Loader/LoaderLogo';
import { ThemeType } from '../../theme';
import './Splash.css';

const AnimatedSplash = ({ theme }: { theme: ThemeType }) => {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.text }}>
        <LoaderLogo id="logo" />
      </div>
    </div>
  );
};

const Splash = ({ theme }: { theme: ThemeType }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => setRedirect(true), 5300);

    return () => clearTimeout(myTimeout);
  }, []);

  if (!redirect) return <AnimatedSplash theme={theme} />;

  return <Navigate to="/blog" replace />;
};

export default Splash;
