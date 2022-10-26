import { LinkButton } from './Button.style';

const Button = ({
  text,
  href,
  newTab,
  onClick,
}: {
  text: string;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
}) => {
  return (
    <LinkButton href={href} target={newTab ? '_blank' : '_self'} onClick={onClick}>
      {text}
    </LinkButton>
  );
};

export default Button;
