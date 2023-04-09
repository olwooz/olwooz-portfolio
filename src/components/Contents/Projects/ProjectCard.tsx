import Image from 'next/image';
import { Project } from '@Projects/types';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { project } = props;
  const { title, previewImage, url } = project;

  if (url) {
    return (
      <a target="_blank" rel="noreferrer" href={url}>
        <Image className="object-cover" src={previewImage} alt={title} width={640} height={360} />
      </a>
    );
  } else {
    return <Image className="object-cover" src={previewImage} alt={title} width={640} height={360} />;
  }
};

export default ProjectCard;
