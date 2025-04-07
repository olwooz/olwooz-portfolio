import Image from 'next/image';
import { useRouter } from 'next/router';
import { Project } from '@Projects/types';
import { useStoreDarkMode } from '@/hooks/useStore';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;
  const { darkMode } = useStoreDarkMode();
  const { title, previewImage, previewImageDarkMode, github, link } = project;

  const router = useRouter();

  const projectImageSrc = darkMode ? previewImageDarkMode ?? previewImage : previewImage;

  const ProjectImage = () => {
    return <Image className="object-cover" src={projectImageSrc} alt={title} width={640} height={360} />;
  };

  const ProjectImageWithLink = ({ link }: { link: string }) => {
    return (
      <a target="_blank" rel="noreferrer" href={link}>
        <ProjectImage />
      </a>
    );
  };

  if (router.locale !== 'ko') {
    return github ? <ProjectImageWithLink link={github} /> : <ProjectImage />;
  } else {
    return link ? <ProjectImageWithLink link={link} /> : <ProjectImage />;
  }
};

export default ProjectCard;
