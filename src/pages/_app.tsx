import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default appWithTranslation(App);
