import { useState } from 'react';
import ContentWrapper from '../ContentWrapper';
import Carousel from './Carousel';
import ProjectText from './ProjectText';
import { projectData } from './data';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ContentWrapper id="projects" style="flex justify-between">
      <Carousel projects={projectData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="mr-[100px] max-w-[300px] text-right">
        <h1 className="mb-16 text-5xl font-thin">Projects</h1>
        <ProjectText projects={projectData} activeIndex={activeIndex} />
      </div>
    </ContentWrapper>
  );
};

export default Projects;
