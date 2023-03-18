import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from './types';

interface Props {
  project: Project;
  position: string;
  handleClick: (direction: number) => void;
}

const ProjectCard = (props: Props) => {
  const { project, position, handleClick } = props;
  const { title, previewImage, url } = project;

  const WithLink = () => {
    return (
      <a target="_blank" rel="noreferrer" href={url}>
        <Image src={previewImage} alt={title} width="800" height="450" />
      </a>
    );
  };

  const WithButton = () => {
    return (
      <Image src={previewImage} alt={title} width="800" height="450" onClick={() => handleClick(position === 'left' ? -1 : 1)} className="cursor-pointer" />
    );
  };

  return <motion.div>{position === 'center' ? <WithLink /> : <WithButton />}</motion.div>;
};

export default ProjectCard;
