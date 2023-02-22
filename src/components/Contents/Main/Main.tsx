import ContentWrapper from '../ContentWrapper';
import { textData } from './data';
import SlotMachine from './SlotMachine';
import { useTranslation } from 'next-i18next';

const Main = () => {
  const { t } = useTranslation('common');

  return (
    <ContentWrapper id="main" style="flex items-center">
      <div className="w-full">
        <h3 className="mb-6 text-2xl font-light">{t('main.greetings')}</h3>
        <SlotMachine textData={textData} />
        <h3 className="mt-4 text-4xl font-black">{t('main.introduction')}</h3>
      </div>
    </ContentWrapper>
  );
};

export default Main;
