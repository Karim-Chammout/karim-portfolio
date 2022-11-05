import { useEffect, useRef } from 'react';

import ArrowUp from './ArrowUp';
import { Wrapper } from './TopButton.style';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const TopButton = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollListener = () => {
      if (scrollRef.current) {
        if (window.scrollY > 130) {
          scrollRef.current.style.visibility = 'visible';
        } else {
          scrollRef.current.style.visibility = 'hidden';
        }
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Wrapper onClick={scrollToTop} ref={scrollRef} title="Go up">
      <ArrowUp />
    </Wrapper>
  );
};
export default TopButton;
