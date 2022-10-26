import { CodeBlock, dracula } from 'react-code-blocks';

import { imgUrlFor } from '../../../../client';
import { PostType } from '../../types';
import { Img } from '../BlogDetails.style';

const StyledImage = (value: PostType['mainImage']) => {
  const imgLink = imgUrlFor(value).url();

  return <Img src={imgLink} onClick={() => window.open(imgLink, '_blank')} />;
};

const CustomCodeBlock = (language: string, code: string) => {
  return <CodeBlock text={code} language={language} theme={dracula} showLineNumbers wrapLines />;
};

export default {
  types: {
    image: ({ value }: { value: PostType['mainImage'] }) => StyledImage(value),
    code: ({ value: { language, code } }: { value: { language: string; code: string } }) =>
      CustomCodeBlock(language, code),
  },
};
