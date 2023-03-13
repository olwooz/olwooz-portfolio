import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ShuffleIcon } from '@/components/Icons';
import { useTranslation } from 'next-i18next';

interface Props {
  textData: string[];
}

interface VariantProps {
  scaleY: number;
  y: string | number;
  opacity: number;
  filter?: string;
}

const MIN_ARR_LEN = 15;

const SlotMachine = ({ textData }: Props) => {
  const { t } = useTranslation('common');

  const dataCount = textData.length < MIN_ARR_LEN ? Math.round(MIN_ARR_LEN / textData.length) * textData.length : textData.length;
  const textArr =
    textData.length < MIN_ARR_LEN
      ? Array(Math.round(MIN_ARR_LEN / textData.length))
          .fill(textData)
          .flat()
      : textData;

  const [data, setData] = useState(textArr);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev < selectedIndex ? prev + 1 : prev;
      });
    }, getDuration(10, currentIndex));

    return () => clearInterval(interval);
  }, [currentIndex, selectedIndex]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: '-50%', opacity: 0 },
    animate: ({ isLast }) => {
      let props: VariantProps = { scaleY: 1, y: 0, opacity: 1 };
      if (!isLast) props['filter'] = 'blur(1.5px)';

      return props;
    },
    exit: { scaleY: 0.3, y: '50%', opacity: 0 },
  };

  function handleClick() {
    const prevIndex = currentIndex;
    const nextIndex = textArr.length - 1;
    setData([...data.slice(prevIndex), ...textArr]);
    setCurrentIndex(0);
    setSelectedIndex(nextIndex);
  }

  function getDuration(base: number, index: number) {
    return base * (index + 1) * (5 / dataCount);
  }

  return (
    <div>
      <AnimatePresence mode="popLayout">
        {textArr.map((text, i) => {
          const isLast = i === selectedIndex;

          return (
            i === currentIndex && (
              <motion.p
                className="cursor-pointer overflow-hidden font-thin sm:text-4xl lg:text-7xl"
                key={text}
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: getDuration(isLast ? 0.1 : 0.01, i), ease: isLast ? 'easeInOut' : 'linear' }}
                onClick={handleClick}
                whileHover={{ opacity: 0.5, transition: { duration: 0.2 } }}
                whileTap={{ scaleY: 0.7, y: '-30%', transition: { duration: 0.2 } }}
              >
                {t(`main.textData.${text}`)}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <motion.button
        className="absolute top-[49vh] left-[10px] sm:left-[60px] xl:left-[160px]"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        <ShuffleIcon />
      </motion.button>
    </div>
  );
};

export default SlotMachine;
