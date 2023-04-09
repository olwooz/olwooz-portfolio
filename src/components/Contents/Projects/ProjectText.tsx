import { useTranslation } from 'next-i18next';
import { Project } from '@Projects/types';

interface Props {
  projects: Project[];
  activeIndex: number;
}

const ProjectText = (props: Props) => {
  const { projects, activeIndex } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <p className="mb-8 text-3xl font-extralight">{projects[activeIndex].title}</p>
      <p className="mb-8 text-xl font-extralight">{t(`projects.${projects[activeIndex].id}`)}</p>
    </>
  );
};

export default ProjectText;
