import { useCallback, useEffect, useState } from 'react';

const useProgressBar = () => {
  const [percentageScrollPosition, setPercentageScrollPosition] = useState(0);

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const calculateScrollDistance = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setPercentageScrollPosition(scrollPosition);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance();
      });
    });
  }, [calculateScrollDistance]);

  return { percentageScrollPosition };
};

export default useProgressBar;
