import { motion } from 'framer-motion';
import { Alphabets } from './Alphabets';

export const Loader = () => {
  return (
    <motion.div
      className="fixed z-50 h-[100vh] w-[100vw] bg-slate-200 dark:bg-slate-800"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 3,
      }}
    >
      <div className="mx-auto h-[100vh] w-max max-w-[500px]">
        <Alphabets />
      </div>
    </motion.div>
  );
};
