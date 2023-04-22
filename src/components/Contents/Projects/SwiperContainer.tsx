import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import { Project } from '@Projects/types';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

interface Props {
  projects: Project[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SwiperContainer = (props: Props) => {
  const { projects, setActiveIndex } = { ...props };
  return (
    <Swiper
      className="mb-16 md:h-[360px] md:w-[640px] 
      [&>.swiper-button-next]:text-black [&>.swiper-button-next]:dark:text-slate-400
      [&>.swiper-button-prev]:text-black [&>.swiper-button-prev]:dark:text-slate-400"
      effect={'cards'}
      grabCursor={true}
      navigation={true}
      modules={[EffectCards, Navigation]}
      onSlideChange={(slider) => {
        setActiveIndex(slider.activeIndex);
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project}></ProjectCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
