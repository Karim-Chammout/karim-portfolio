import { ReactNode, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Footer, Navbar, Seo, TopButton } from '../../components';
import { Spinner } from '../../components/Spinner';

const PageTemplate = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isSplash = location.pathname === '/' || location.pathname === '/splash';

  if (isSplash) {
    return <div>{children}</div>;
  }

  return (
    <Container>
      <Seo />
      <Navbar />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
      <TopButton />
      <Footer />
    </Container>
  );
};

export default PageTemplate;
