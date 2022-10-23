import { Helmet } from 'react-helmet';

const SeoHeader = () => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Karim Chammout" />
      <meta
        name="description"
        content="I'm a Front-end developer who's writing code and moving pixels in the www. I'm looking for learning new things and new experiences in this vast world of creativity."
      />
      <meta
        name="keywords"
        content="Karim Chammout, karim dev, karim-dev, karim, developer, karim developer"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://karim-dev.com/" />
      <meta property="og:title" content="Karim Chammout" />
      <meta
        property="og:description"
        content="I'm a Front-end developer who's writing code and moving pixels in the www. I'm looking for learning new things and new experiences in this vast world of creativity."
      />
      <meta property="og:image" content="favicon/android-chrome-512x512.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="favicon/favicon/ms-icon-310x310.png" />
      <meta property="twitter:url" content="https://karim-dev.com/" />
      <meta property="twitter:title" content="Karim Chammout" />
      <meta
        property="twitter:description"
        content="I'm a Front-end developer who's writing code and moving pixels in the www. I'm looking for learning new things and new experiences in this vast world of creativity."
      />
      <meta property="twitter:image" content="favicon/android-chrome-512x512.png" />

      <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default SeoHeader;
