import Image from 'next/image';
import { useRouter } from 'next/router';
import { Project } from '@Projects/types';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;
  const { title, previewImage, github, notion } = project;

  const router = useRouter();

  const ProjectImage = () => {
    return <Image className="object-cover" src={previewImage} alt={title} width={640} height={360} />;
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
    return notion ? <ProjectImageWithLink link={notion} /> : <ProjectImage />;
  }
};

export default ProjectCard;
