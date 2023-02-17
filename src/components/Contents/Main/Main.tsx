import ContentWrapper from '../ContentWrapper';
import { textData } from './data';
import SlotMachine from './SlotMachine';

const Main = () => {
  return (
    <ContentWrapper id="main" style="flex items-center">
      <div className="w-full">
        <h3 className="mb-6 text-2xl font-light">안녕하세요.</h3>
        <SlotMachine textData={textData} />
        <h3 className="mt-4 text-4xl font-black">누구누구입니다.</h3>
      </div>
    </ContentWrapper>
  );
};

export default Main;
