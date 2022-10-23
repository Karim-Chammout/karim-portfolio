import { ThemeType } from '../../theme';
import './TopButton.css';

const TopButton = ({ theme }: { theme: ThemeType }) => {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      (document.getElementById('topButton') as HTMLElement).style.visibility = 'visible';
    } else {
      (document.getElementById('topButton') as HTMLElement).style.visibility = 'hidden';
    }
  }

  window.onscroll = () => {
    scrollFunction();
  };

  const onMouseEnter = (color: string, bgColor: string) => {
    /* For the button */
    const topButton = document.getElementById('topButton') as HTMLElement;
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById('arrow') as HTMLElement;
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color: string, bgColor: string) => {
    /* For the button */
    const topButton = document.getElementById('topButton') as HTMLElement;
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById('arrow') as HTMLElement;
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        zIndex: 999,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
};
export default TopButton;
