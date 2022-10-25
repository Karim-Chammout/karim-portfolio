import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import LoaderLogo from '../../components/Loader/LoaderLogo';
import { LogoWrapper, Screen } from './Splash.style';

const AnimatedSplash = () => {
  return (
    <LogoWrapper>
      <Screen>
        <LoaderLogo />
      </Screen>
    </LogoWrapper>
  );
};

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const myTimeout = setTimeout(() => setRedirect(true), 5300);

    return () => clearTimeout(myTimeout);
  }, []);

  if (!redirect) return <AnimatedSplash />;

  return <Navigate to="/blog" replace />;
};

export default Splash;
