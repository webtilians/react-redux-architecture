import { injectGlobal } from 'styled-components';
import icomoon from './fonts/icomoon';
import geogrotesque from './fonts/geogrotesque';

const GlobalStyles = ({ theme }) => {
  injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: Geogrotesque-Regular;
      color: #9E9E9E;
    }

    ${icomoon}
    ${geogrotesque}
  `;

  return null;
}

export default GlobalStyles;