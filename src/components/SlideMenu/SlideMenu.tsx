import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStoreSlideMenu } from '@hooks/useStore';
import IconGroup from '@components/SlideMenu/IconGroup';
import SectionButtons from '@components/Buttons/SectionButtons';
import IconButton from '@components/Buttons/IconButton';
import { iconStyle } from '@/constants/styles';

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
            <IconButton name="RightArrowIcon" size={36} style={iconStyle} />
          </div>
          <SectionButtons wrapperStyle="block" buttonStyle="py-16 text-2xl" onClick={toggleOpen} />
          <IconGroup />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideMenu;
