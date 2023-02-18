import About from '@/components/Contents/About/About';
import Contact from '@/components/Contents/Contact/Contact';
import Main from '@/components/Contents/Main/Main';
import Projects from '@/components/Contents/Projects/Projects';
import Header from '@/components/Header/Header';
import IconBar from '@/components/IconBar/IconBar';
import { IconNames } from '@/components/Icons/types';
import Head from 'next/head';
import useStore from '@/hooks/useStore';

export default function Home() {
  const { darkMode } = useStore();

  const leftIcons: IconNames[] = ['LightDarkIcon'];
  const rightIcons: IconNames[] = ['VelogIcon', 'GitHubIcon'];

  return (
    <>
      <Head>
        <title>olwooz&apos;s portfolio</title>
        <meta name="description" content="olwooz's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={darkMode ? 'dark' : ''}>
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
