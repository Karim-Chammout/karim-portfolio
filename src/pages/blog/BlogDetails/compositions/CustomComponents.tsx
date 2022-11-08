import { CodeBlock, dracula } from 'react-code-blocks';

import { imgUrlFor } from '../../../../client';
import { Post } from '../../types';
import { Img } from '../BlogDetails.style';
import IFramePreview from './IFramePreview';

const StyledImage = (value: Post['mainImage']) => {
  const imgLink = imgUrlFor(value).url();

  return <Img src={imgLink} onClick={() => window.open(imgLink, '_blank')} />;
};

const CustomCodeBlock = (language: string, code: string) => {
  return <CodeBlock text={code} language={language} theme={dracula} showLineNumbers wrapLines />;
};

export default {
  types: {
    image: ({ value }: { value: Post['mainImage'] }) => StyledImage(value),
    code: ({ value: { language, code } }: { value: { language: string; code: string } }) =>
      CustomCodeBlock(language, code),
    iFrame: ({ value: { url } }: { value: { url: string } }) => IFramePreview(url),
  },
};
