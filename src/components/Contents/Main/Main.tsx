import { useTranslation } from 'next-i18next';
import ContentWrapper from '@components/Contents/ContentWrapper';
import { SlotMachine } from 'react-slot-machine-text';
import { useEffect, useState } from 'react';

const Main = () => {
  const { t, i18n, ready } = useTranslation('common');
  const [language, setLanguage] = useState<string | null>(null);
  const textDataArray = Object.values(t('main.textData', { returnObjects: true })) as string[];

  useEffect(() => {
    if (!ready) return;
    setLanguage(i18n.language);
  }, [ready, i18n.language]);

  return (
    <ContentWrapper id="main" style="flex items-center">
      <div id="mobile" className="w-full sm:hidden">
        <h1 className="mb-6 text-base font-extralight">{t('main.greetings')}</h1>
        {textDataArray.map((text) => (
          <h1 key={text} className="text-2xl font-thin">
            {text}
          </h1>
        ))}
        <h1 className="mt-6 text-base font-black">{t('main.introduction')}</h1>
      </div>

      <div className="hidden w-full sm:block">
        <h1 className="mb-6 text-2xl font-light">{t('main.greetings')}</h1>
        {language && <SlotMachine textData={textDataArray} key={language}></SlotMachine>}
        <h1 className="mt-4 text-4xl font-bold">{t('main.introduction')}</h1>
      </div>
    </ContentWrapper>
  );
};

export default Main;
