import { CSSProperties } from 'react';

const formatedDate = (date: string) => new Date(date).toDateString().split(' ').slice(1).join(' ');

const DisplayDate = ({
  textLabel,
  date,
  extraStyles,
}: {
  textLabel: string;
  date: string;
  extraStyles?: CSSProperties;
}) => {
  return (
    <p style={{ fontStyle: 'italic', ...extraStyles }}>
      {textLabel}: <span style={{ fontWeight: 'bold' }}>{formatedDate(date)}</span>
    </p>
  );
};

export default DisplayDate;
