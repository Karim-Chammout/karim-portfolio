import Iframe from 'react-iframe';

const IFramePreview = (url: string) => {
  return <Iframe url={url} width="100%" height="400px" id={url} />;
};

export default IFramePreview;
