import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import ContentWrapper from '@components/Contents/ContentWrapper';
import ProjectText from '@Projects/ProjectText';
import { projectData } from '@Projects/data';
import SwiperContainer from './SwiperContainer';

const Projects = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ContentWrapper id="projects" style="2xl:hidden">
        <div className="text-right">
          <h1 className="mb-16 text-5xl font-light">Projects</h1>
          <SwiperContainer projects={projectData} setActiveIndex={setActiveIndex} />
          <ProjectText projects={projectData} activeIndex={activeIndex} />
          {router.locale === 'ko' || (projectData[activeIndex].github && <span>{t('projects.click')}</span>)}
        </div>
      </ContentWrapper>

      <ContentWrapper id="projects" style="hidden 2xl:flex 2xl:justify-between">
        <SwiperContainer projects={projectData} setActiveIndex={setActiveIndex} />

        <div className="mr-[100px] w-[300px] text-right">
          <h1 className="mb-16 text-5xl font-light">Projects</h1>
          <ProjectText projects={projectData} activeIndex={activeIndex} />
          {router.locale === 'ko' || (projectData[activeIndex].github && <span>{t('projects.click')}</span>)}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Projects;
