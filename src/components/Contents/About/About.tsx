import ContentWrapper from '@components/Contents/ContentWrapper';
import { ABOUT_IMG_HEIGHT, ABOUT_IMG_WIDTH } from '@constants/styles';
import AboutText from '@About/AboutText';
import { ABOUT_P } from '@About/data';

const About = () => {
  return (
    <ContentWrapper id="about" style="2xl:flex 2xl:justify-between">
      <div className="2xl:ml-[100px] 2xl:mr-[100px]">
        <h1 className="mb-8 text-5xl font-thin">About</h1>
        {ABOUT_P.map((content, i) => (
          <AboutText content={content} key={i} />
        ))}
      </div>
      <div className={`mx-auto 2xl:mr-[100px] ${ABOUT_IMG_HEIGHT} ${ABOUT_IMG_WIDTH} border-2 border-dashed border-gray-400`}>Photo</div>
    </ContentWrapper>
  );
};

export default About;
