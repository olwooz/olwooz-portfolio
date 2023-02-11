import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import PageButton from './PageButton';
import ProjectCard from './ProjectCard';
import { Project } from './types';

interface Props {
  projects: Project[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = (props: Props) => {
  const { projects, activeIndex, setActiveIndex } = props;

  const [currentDirection, setCurrentDirection] = useState(1);

  const positions = ['left', 'center', 'right'];

  const visibleItems = [...projects, ...projects].slice(
    activeIndex === 0 ? activeIndex + projects.length - 1 : activeIndex - 1,
    activeIndex === 0 ? activeIndex + projects.length + 2 : activeIndex + 2,
  );

  const variants: Variants = {
    enterExit: { scale: 0, opacity: 0 },
    center: ({ position }) => {
      let xVal = 0;

      if (position === 'left') xVal = 100;
      if (position === 'right') xVal = -100;

      return {
        scale: 1,
        zIndex: position === 'center' ? 1 : 0,
        x: xVal,
        opacity: position === 'center' ? 1 : 0.2,
      };
    },
    hover: ({ position }) => {
      let xVal = 0;

      if (position === 'left') xVal = -15;
      if (position === 'right') xVal = 15;

      return { opacity: 1, x: xVal, transition: { duration: 0.5 } };
    },
  };

  const handleClick = (direction: number) => {
    setActiveIndex((prevIndex) => {
      let nextIndex = prevIndex + direction;

      if (nextIndex < 0) return projects.length - 1;
      if (nextIndex === projects.length) return 0;
      return nextIndex;
    });
    setCurrentDirection(direction);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((project) => {
            const position = positions[visibleItems.indexOf(project)];
            return (
              <motion.div
                className={`flex h-fit min-w-0 items-center justify-center rounded-xl shadow-md ${position === 'center' ? 'w-3/5' : 'w-1/5'} `}
                key={project.title}
                layout
                custom={{
                  position,
                  currentDirection,
                }}
                variants={variants}
                initial="enterExit"
                animate="center"
                exit="enterExit"
                whileHover="hover"
                transition={{ duration: 0.8 }}
              >
                <ProjectCard project={project} position={position} handleClick={handleClick} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <PageButton direction={-1} text="<" handleClick={handleClick} />
        <PageButton direction={1} text=">" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Carousel;
