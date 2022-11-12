import { LinkButton, StyledButton } from './Button.style';

const Button = ({
  text,
  href,
  newTab,
  onClick,
  disabled = false,
}: {
  text: string;
  href?: string;
  newTab?: boolean;
  onClick?: (() => Promise<void>) | (() => void);
  disabled?: boolean;
}) => {
  if (onClick) {
    return (
      <StyledButton disabled={disabled} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }

  return (
    <LinkButton href={href} target={newTab ? '_blank' : '_self'}>
      {text}
    </LinkButton>
  );
};

export default Button;
