import About from '@/components/Contents/About/About';
import Contact from '@/components/Contents/Contact/Contact';
import Main from '@/components/Contents/Main/Main';
import Projects from '@/components/Contents/Projects/Projects';
import Header from '@/components/Header/Header';
import IconBar from '@/components/IconBar/IconBar';
import { IconNames } from '@/components/Icons/types';
import Head from 'next/head';
import { useStoreSlideMenu, useStoreDarkMode } from '@/hooks/useStore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function Home() {
  const { darkMode } = useStoreDarkMode();
  const { isOpen } = useStoreSlideMenu();

  const leftIcons: IconNames[] = ['LanguageIcon', 'LightDarkIcon'];
  const rightIcons: IconNames[] = ['VelogIcon', 'GitHubIcon'];

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'visible';
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>olwooz&apos;s portfolio</title>
        <meta name="description" content="olwooz's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={darkMode ? 'dark bg-slate-800' : 'bg-slate-200'}>
        <Header />
        <Main />
        <About />
        <Projects />
        <Contact />
        <IconBar direction="left" icons={leftIcons} />
        <IconBar direction="right" icons={rightIcons} />
      </div>
    </>
  );
}
