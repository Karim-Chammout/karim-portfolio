import "./Button.css";

const onMouseEnter = (event: any, color: string, bgColor: string) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event: any, color: string, bgColor: string) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const Button = ({
  text,
  className,
  href,
  newTab,
  theme,
}: {
  text: string;
  className?: string;
  href: string;
  newTab: boolean;
  theme: any;
}) => {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noreferrer"
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
