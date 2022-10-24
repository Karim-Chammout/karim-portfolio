import { ReactNode, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import TopButton from '../../components/topButton/TopButton';
import { ThemeType } from '../../theme';

const PageTemplate = ({ children, theme }: { children: ReactNode; theme: ThemeType }) => {
  const location = useLocation();
  const isSplash = location.pathname === '/' || location.pathname === '/splash';

  if (isSplash) {
    return <div>{children}</div>;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Container>
        <Navbar />
        {children}
        <TopButton theme={theme} />
        <Footer theme={theme} />
      </Container>
    </Suspense>
  );
};

export default PageTemplate;
