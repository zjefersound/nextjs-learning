import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { themes } from '../styles/themes';
import api from '../services/api';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <SWRConfig value={{fetcher: (url: string) => api.get(url).then(r => r.data)}}>
        <Component {...pageProps} />
      </SWRConfig>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
