import { useState } from 'react';
import ContentWrapper from '../ContentWrapper';
import Carousel from './Carousel';
import ProjectText from './ProjectText';
import { projectData } from './data';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ContentWrapper id="projects" style="2xl:hidden">
        <div className="text-right">
          <h1 className="mb-16 text-5xl font-thin">Projects</h1>
          <Carousel projects={projectData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

          <ProjectText projects={projectData} activeIndex={activeIndex} />
        </div>
      </ContentWrapper>

      <ContentWrapper id="projects" style="hidden 2xl:flex 2xl:justify-between">
        <Carousel projects={projectData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className="mr-[100px] max-w-[300px] text-right">
          <h1 className="mb-16 text-5xl font-thin">Projects</h1>
          <ProjectText projects={projectData} activeIndex={activeIndex} />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Projects;
