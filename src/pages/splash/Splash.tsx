import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import LoaderLogo from '../../components/Loader/LoaderLogo';
import { BodyStyles, LogoWrapper, Screen } from './Splash.style';

const AnimatedSplash = () => {
  return (
    <LogoWrapper>
      <BodyStyles />
      <Screen>
        <LoaderLogo />
      </Screen>
    </LogoWrapper>
  );
};

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => setRedirect(true), 3000);

    return () => clearTimeout(myTimeout);
  }, []);

  if (!redirect) return <AnimatedSplash />;

  return <Navigate to="/blog" replace />;
};

export default Splash;
