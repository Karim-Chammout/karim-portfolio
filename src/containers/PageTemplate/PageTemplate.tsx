import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Footer, Navbar, TopButton } from '../../components';

const PageTemplate = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isSplash = location.pathname === '/' || location.pathname === '/splash';

  if (isSplash) {
    return <div>{children}</div>;
  }

  return (
    <Container>
      <Navbar />
      {children}
      <TopButton />
      <Footer />
    </Container>
  );
};

export default PageTemplate;
