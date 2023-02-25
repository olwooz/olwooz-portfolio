import ContentWrapper from '../ContentWrapper';
import { textData } from './data';
import SlotMachine from './SlotMachine';
import { useTranslation } from 'next-i18next';

const Main = () => {
  const { t } = useTranslation('common');

  return (
    <ContentWrapper id="main" style="flex items-center">
      <div id="mobile" className="w-full sm:hidden">
        <h1 className="mb-6 text-base font-light">{t('main.greetings')}</h1>
        {textData.map((text) => (
          <h1 key="text" className="text-2xl font-thin">
            {t(`main.textData.${text}`)}
          </h1>
        ))}
        <h1 className="mt-6 text-base font-black">{t('main.introduction')}</h1>
      </div>

      <div className="hidden w-full sm:block">
        <h1 className="mb-6 text-2xl font-light">{t('main.greetings')}</h1>
        <SlotMachine textData={textData} />
        <h1 className="mt-4 text-4xl font-black">{t('main.introduction')}</h1>
      </div>
    </ContentWrapper>
  );
};

export default Main;
