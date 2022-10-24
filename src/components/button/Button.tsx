import { LinkButton } from './Button.style';

const Button = ({ text, href, newTab }: { text: string; href: string; newTab: boolean }) => {
  return (
    <LinkButton href={href} target={newTab ? '_blank' : '_self'}>
      {text}
    </LinkButton>
  );
};

export default Button;
