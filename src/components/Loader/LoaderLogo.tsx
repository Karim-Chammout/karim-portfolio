/* eslint-disable react/no-danger */
import { ThemeType } from '../../theme';
import './LoaderLogo.css';

const LogoLoader = ({ theme }: { theme: ThemeType; id?: string }) => {
  return (
    <svg
      className="raw_logo"
      width="80%"
      height="80%"
      viewBox="0 0 440 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="myHexagon"
        d="M57.6563 197.552L89.0191 85.3407L206.067 55.2738L291.752 137.418L260.389 249.629L143.341 279.696L57.6563 197.552Z"
        stroke={theme.body}
        strokeWidth="4"
      />
      <path
        className="myHexagon"
        d="M305.445 150.811L273.705 262.925L156.556 292.629L71.1483 210.221L102.889 98.1069L220.038 68.4024L305.445 150.811Z"
        stroke={theme.body}
        strokeWidth="4"
      />
      <path
        className="letter"
        d="M117.3 165.6V164.6H116.3V165.6H117.3ZM123 116.5L122.253 117.164L122.292 117.208L122.336 117.247L123 116.5ZM117.9 115.6H116.9V116.6H117.9V115.6ZM117.9 108.3V107.3H116.9V108.3H117.9ZM139.6 108.3H140.6V107.3H139.6V108.3ZM139.6 115.6V116.6H140.6V115.6H139.6ZM135.2 116.5L134.453 115.836L134.431 115.86L134.411 115.886L135.2 116.5ZM134.5 140.4H133.5V142.941L135.232 141.082L134.5 140.4ZM157.6 115.6L158.332 116.282L159.898 114.6H157.6V115.6ZM152.5 115.6H151.5V116.6H152.5V115.6ZM152.5 108.3V107.3H151.5V108.3H152.5ZM174.5 108.3H175.5V107.3H174.5V108.3ZM174.5 116V117H175.5V116H174.5ZM167.8 116.6L168.279 117.478L168.279 117.478L167.8 116.6ZM165.3 118.7L166.026 119.388L166.031 119.382L165.3 118.7ZM149.1 135.8L148.374 135.112L147.828 135.689L148.266 136.351L149.1 135.8ZM166.8 162.6L165.966 163.151L165.971 163.159L165.976 163.167L166.8 162.6ZM169.1 164.9L168.596 165.764L168.596 165.764L169.1 164.9ZM175.5 165.6H176.5V164.6H175.5V165.6ZM175.5 173V174H176.5V173H175.5ZM152.5 173H151.5V174H152.5V173ZM152.5 165.6V164.6H151.5V165.6H152.5ZM158.1 165.6V166.6H159.957L158.935 165.049L158.1 165.6ZM142.8 142.4L143.635 141.849L142.935 140.789L142.069 141.718L142.8 142.4ZM134.5 151.3L133.769 150.618L133.5 150.906V151.3H134.5ZM135.2 164.7L134.411 165.314L134.431 165.34L134.453 165.364L135.2 164.7ZM140.2 165.6H141.2V164.6H140.2V165.6ZM140.2 173V174H141.2V173H140.2ZM117.3 173H116.3V174H117.3V173ZM117.3 166.6H120.2V164.6H117.3V166.6ZM120.2 166.6C121.611 166.6 122.886 166.328 123.707 165.507L122.293 164.093C122.047 164.338 121.456 164.6 120.2 164.6V166.6ZM123.707 165.507C124.57 164.645 124.9 163.402 124.9 162H122.9C122.9 163.131 122.63 163.755 122.293 164.093L123.707 165.507ZM124.9 162V119.2H122.9V162H124.9ZM124.9 119.2C124.9 117.81 124.575 116.562 123.664 115.753L122.336 117.247C122.625 117.505 122.9 118.056 122.9 119.2H124.9ZM123.747 115.836C122.93 114.916 121.637 114.6 120.2 114.6V116.6C121.43 116.6 122.003 116.884 122.253 117.164L123.747 115.836ZM120.2 114.6H117.9V116.6H120.2V114.6ZM118.9 115.6V108.3H116.9V115.6H118.9ZM117.9 109.3H139.6V107.3H117.9V109.3ZM138.6 108.3V115.6H140.6V108.3H138.6ZM139.6 114.6H137.8V116.6H139.6V114.6ZM137.8 114.6C136.457 114.6 135.253 114.935 134.453 115.836L135.947 117.164C136.213 116.865 136.743 116.6 137.8 116.6V114.6ZM134.411 115.886C133.748 116.737 133.5 117.898 133.5 119.2H135.5C135.5 118.102 135.718 117.463 135.989 117.114L134.411 115.886ZM133.5 119.2V140.4H135.5V119.2H133.5ZM135.232 141.082L158.332 116.282L156.868 114.918L133.768 139.718L135.232 141.082ZM157.6 114.6H152.5V116.6H157.6V114.6ZM153.5 115.6V108.3H151.5V115.6H153.5ZM152.5 109.3H174.5V107.3H152.5V109.3ZM173.5 108.3V116H175.5V108.3H173.5ZM174.5 115H170.8V117H174.5V115ZM170.8 115C169.445 115 168.258 115.211 167.321 115.722L168.279 117.478C168.809 117.189 169.621 117 170.8 117V115ZM167.321 115.722C166.453 116.196 165.535 116.983 164.569 118.018L166.031 119.382C166.932 118.417 167.68 117.804 168.279 117.478L167.321 115.722ZM164.574 118.012L148.374 135.112L149.826 136.488L166.026 119.388L164.574 118.012ZM148.266 136.351L165.966 163.151L167.634 162.049L149.934 135.249L148.266 136.351ZM165.976 163.167C166.762 164.309 167.629 165.199 168.596 165.764L169.604 164.036C168.971 163.667 168.305 163.024 167.624 162.033L165.976 163.167ZM168.596 165.764C169.595 166.347 170.819 166.6 172.2 166.6V164.6C171.048 164.6 170.205 164.387 169.604 164.036L168.596 165.764ZM172.2 166.6H175.5V164.6H172.2V166.6ZM174.5 165.6V173H176.5V165.6H174.5ZM175.5 172H152.5V174H175.5V172ZM153.5 173V165.6H151.5V173H153.5ZM152.5 166.6H158.1V164.6H152.5V166.6ZM158.935 165.049L143.635 141.849L141.965 142.951L157.265 166.151L158.935 165.049ZM142.069 141.718L133.769 150.618L135.231 151.982L143.531 143.082L142.069 141.718ZM133.5 151.3V162H135.5V151.3H133.5ZM133.5 162C133.5 163.302 133.748 164.463 134.411 165.314L135.989 164.086C135.718 163.737 135.5 163.098 135.5 162H133.5ZM134.453 165.364C135.27 166.284 136.563 166.6 138 166.6V164.6C136.77 164.6 136.197 164.316 135.947 164.036L134.453 165.364ZM138 166.6H140.2V164.6H138V166.6ZM139.2 165.6V173H141.2V165.6H139.2ZM140.2 172H117.3V174H140.2V172ZM118.3 173V165.6H116.3V173H118.3Z"
        stroke={theme.body}
        strokeWidth="3"
      />
      <path
        className="letter"
        d="M206.3 240.3L205.798 241.165L205.804 241.169L205.811 241.173L206.3 240.3ZM195.1 228.5L194.206 228.947L194.208 228.952L195.1 228.5ZM205.4 181.2L205.927 182.05L205.927 182.05L205.4 181.2ZM235.4 178.2L235.14 179.166L235.151 179.169L235.162 179.171L235.4 178.2ZM244.6 182.4H245.6V181.897L245.197 181.598L244.6 182.4ZM244.6 192.6V193.6H245.6V192.6H244.6ZM234.1 192.6H233.1V193.6H234.1V192.6ZM234.1 186.2H235.1V185.55L234.506 185.286L234.1 186.2ZM207.2 191.3L206.42 190.674L206.415 190.681L207.2 191.3ZM207.7 230.2L206.951 230.862L206.956 230.868L207.7 230.2ZM233.2 236.2L232.97 235.227L232.964 235.228L233.2 236.2ZM240.5 233.1L241.346 232.568L240.814 231.721L239.968 232.253L240.5 233.1ZM244.4 239.3L244.95 240.135L245.768 239.596L245.246 238.768L244.4 239.3ZM235.3 243.3L235.072 242.326L235.06 242.329L235.048 242.332L235.3 243.3ZM224.3 243.5C217.433 243.5 211.61 242.127 206.789 239.427L205.811 241.173C210.99 244.073 217.167 245.5 224.3 245.5V243.5ZM206.802 239.435C202.033 236.664 198.436 232.872 195.992 228.048L194.208 228.952C196.83 234.128 200.7 238.203 205.798 241.165L206.802 239.435ZM195.994 228.053C193.541 223.146 192.3 217.47 192.3 211H190.3C190.3 217.73 191.592 223.72 194.206 228.947L195.994 228.053ZM192.3 211C192.3 204.45 193.446 198.696 195.71 193.714L193.89 192.886C191.487 198.171 190.3 204.216 190.3 211H192.3ZM195.71 193.714C197.963 188.758 201.364 184.878 205.927 182.05L204.873 180.35C199.969 183.389 196.304 187.575 193.89 192.886L195.71 193.714ZM205.927 182.05C210.464 179.238 216.17 177.8 223.1 177.8V175.8C215.897 175.8 209.802 177.295 204.873 180.35L205.927 182.05ZM223.1 177.8C227.772 177.8 231.78 178.261 235.14 179.166L235.66 177.234C232.087 176.272 227.895 175.8 223.1 175.8V177.8ZM235.162 179.171C238.581 180.01 241.523 181.358 244.003 183.202L245.197 181.598C242.477 179.575 239.285 178.123 235.638 177.229L235.162 179.171ZM243.6 182.4V192.6H245.6V182.4H243.6ZM244.6 191.6H234.1V193.6H244.6V191.6ZM235.1 192.6V186.2H233.1V192.6H235.1ZM234.506 185.286C231.344 183.881 227.531 183.2 223.1 183.2V185.2C227.336 185.2 230.856 185.852 233.694 187.114L234.506 185.286ZM223.1 183.2C216.038 183.2 210.434 185.674 206.42 190.674L207.98 191.926C211.566 187.46 216.562 185.2 223.1 185.2V183.2ZM206.415 190.681C202.497 195.648 200.6 202.462 200.6 211H202.6C202.6 202.738 204.437 196.418 207.985 191.919L206.415 190.681ZM200.6 211C200.6 219.361 202.675 226.026 206.951 230.862L208.449 229.538C204.592 225.174 202.6 219.039 202.6 211H200.6ZM206.956 230.868C211.311 235.715 217.267 238.1 224.7 238.1V236.1C217.733 236.1 212.356 233.885 208.444 229.532L206.956 230.868ZM224.7 238.1C227.96 238.1 230.875 237.795 233.436 237.172L232.964 235.228C230.591 235.805 227.84 236.1 224.7 236.1V238.1ZM233.43 237.173C236.077 236.546 238.611 235.468 241.032 233.947L239.968 232.253C237.722 233.665 235.39 234.654 232.97 235.227L233.43 237.173ZM239.654 233.632L243.554 239.832L245.246 238.768L241.346 232.568L239.654 233.632ZM243.85 238.465C241.006 240.339 238.081 241.622 235.072 242.326L235.528 244.274C238.786 243.511 241.928 242.127 244.95 240.135L243.85 238.465ZM235.048 242.332C232.086 243.105 228.509 243.5 224.3 243.5V245.5C228.625 245.5 232.381 245.095 235.552 244.268L235.048 242.332Z"
        stroke={theme.body}
        strokeWidth="3"
      />
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .letter{
                opacity: 0;
                -webkit-animation: fadein 2s linear forwards 2.5s;
                -o-animation: fadein 2s linear forwards 2.5s;
                -moz-animation: fadein 2s linear forwards 2.5s;
                animation: fadein 2s linear forwards 2.5s;
              }

              @-webkit-keyframes fadein{
                from{
                  opacity: 0;
                }
                to{
                  opacity: 1;
                }
              }

                .myHexagon{
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                -webkit-animation: dash 4s linear forwards 0.5s;
                -o-animation: dash 4s linear forwards 0.5s;
                -moz-animation: dash 4s linear forwards 0.5s;
                animation: dash 4s linear forwards 0.5s;
              }

              @-webkit-keyframes dash{
                from{
                  stroke-dashoffset: 800;
                }
                to{
                  stroke-dashoffset: 0;
                }
              }
              `,
          }}
        />
      </defs>
    </svg>
  );
};

export default LogoLoader;
