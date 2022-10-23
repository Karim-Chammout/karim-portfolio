import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TopButton from '../../components/topButton/TopButton';
import { ThemeType } from '../../theme';

const PageTemplate = ({ children, theme }: { children: ReactNode; theme: ThemeType }) => {
  const location = useLocation();
  const isSplash = location.pathname === '/' || location.pathname === '/splash';

  if (isSplash) {
    return <div>{children}</div>;
  }

  return (
    <Container>
      <Navbar theme={theme} />
      {children}
      <TopButton theme={theme} />
      <Footer theme={theme} />
    </Container>
  );
};

export default PageTemplate;
