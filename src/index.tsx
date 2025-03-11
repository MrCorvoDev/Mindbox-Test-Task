import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'styled-components';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';

if (import.meta.env.PROD) disableReactDevTools();

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <App />
      </ThemeProvider>
   </StrictMode>,
);
