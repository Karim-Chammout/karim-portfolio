import { CodeBlock, dracula } from 'react-code-blocks';

import { imgUrlFor } from '../../../../client';
import { PostType } from '../../types';
import { Img } from '../BlogDetails.style';

const imageLink = (asset: PostType['mainImage']) => imgUrlFor(asset).url();

const StyledImage = (value: PostType['mainImage']) => (
  <Img src={imgUrlFor(value).url()} onClick={() => window.open(imageLink(value), '_blank')} />
);

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
