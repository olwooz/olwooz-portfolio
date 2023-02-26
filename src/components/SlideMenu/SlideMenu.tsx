import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStoreSlideMenu } from '@/hooks/useStore';
import { RightArrowIcon } from '@/components/Icons';
import IconGroup from './IconGroup';
import MenuButton from './MenuButton';
import SlideMenuButton from './SlideMenuButton';

const SlideMenu = () => {
  const { isOpen, toggleOpen } = useStoreSlideMenu();
  const slideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (slideMenuRef.current && !slideMenuRef.current.contains(event.target as Node)) {
        toggleOpen();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [slideMenuRef, toggleOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="slide-menu"
          className={`absolute top-0 right-0 z-20 ml-auto h-auto w-full translate-y-full transform bg-slate-200 text-center shadow-lg dark:bg-slate-800 dark:text-slate-200`}
          initial={{ x: '100%' }}
          animate={{ x: 0, transition: { duration: 0.4 } }}
          exit={{ x: '100%', transition: { duration: 0.4 } }}
          ref={slideMenuRef}
        >
          <div className="absolute top-8 right-8">
            <SlideMenuButton>
              <RightArrowIcon />
            </SlideMenuButton>
          </div>
          <MenuButton name="main" />
          <MenuButton name="about" />
          <MenuButton name="projects" />
          <MenuButton name="contact" />
          <IconGroup />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideMenu;
