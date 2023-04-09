import { useTranslation } from 'next-i18next';
import ContentWrapper from '@components/Contents/ContentWrapper';
import { textKeys } from '@Main/data';
import SlotMachine from '@Main/SlotMachine';

const Main = () => {
  const { t } = useTranslation('common');

  return (
    <ContentWrapper id="main" style="flex items-center">
      <div id="mobile" className="w-full sm:hidden">
        <h1 className="mb-6 text-base font-extralight">{t('main.greetings')}</h1>
        {textKeys.map((text) => (
          <h1 key={text} className="text-2xl font-thin">
            {t(`main.textData.${text}`)}
          </h1>
        ))}
        <h1 className="mt-6 text-base font-black">{t('main.introduction')}</h1>
      </div>

      <div className="hidden w-full sm:block">
        <h1 className="mb-6 text-2xl font-light">{t('main.greetings')}</h1>
        <SlotMachine textData={textKeys} />
        <h1 className="mt-4 text-4xl font-bold">{t('main.introduction')}</h1>
      </div>
    </ContentWrapper>
  );
};

export default Main;
