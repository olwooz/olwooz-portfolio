import ContentWrapper from '@components/Contents/ContentWrapper';
import { ABOUT_IMG_HEIGHT, ABOUT_IMG_WIDTH } from '@constants/styles';
import AboutText from '@About/AboutText';
import { NUM_ABOUT_SENTENCES } from './data';
import Image from 'next/image';

const About = () => {
  return (
    <ContentWrapper id="about" style="2xl:flex 2xl:justify-between">
      <div className="2xl:ml-[100px] 2xl:mr-[100px]">
        <h1 className="mb-8 text-5xl font-light">About</h1>
        <div className={`relative mx-auto mb-8 2xl:mr-[100px] 2xl:hidden ${ABOUT_IMG_HEIGHT} ${ABOUT_IMG_WIDTH}`}>
          <Image src="/images/profile.webp" alt="profile" fill />
        </div>
        {Array(NUM_ABOUT_SENTENCES)
          .fill(0)
          .map((_, i) => (
            <AboutText index={i} key={i} />
          ))}
      </div>
      <div className={`relative mx-auto hidden 2xl:mr-[100px] 2xl:block ${ABOUT_IMG_HEIGHT} ${ABOUT_IMG_WIDTH}`}>
        <Image src="/images/profile.webp" alt="profile" fill />
      </div>
    </ContentWrapper>
  );
};

export default About;
