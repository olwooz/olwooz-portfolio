import { Project } from './types';

interface Props {
  projects: Project[];
  activeIndex: number;
}

const ProjectText = (props: Props) => {
  const { projects, activeIndex } = props;

  return (
    <>
      <p className="mb-8 text-3xl font-extrabold">{projects[activeIndex].title}</p>
      <p className="font-base mb-8">{projects[activeIndex].description}</p>
    </>
  );
};

export default ProjectText;
