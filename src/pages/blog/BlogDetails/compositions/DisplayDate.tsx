import { CSSProperties } from 'react';

import { formatedDate } from '../../../../utils/formatDate';

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
