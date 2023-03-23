import { motion } from 'framer-motion';
import { draw } from '@utils/draw';

export const Alphabets = () => {
  return (
    <motion.svg
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="20px"
      viewBox="0 0 1000 1000"
      initial="hidden"
      animate="visible"
      className="m-auto block h-full w-full"
    >
      <motion.circle cx="250" cy="500" r="70" stroke="#0099ff" fill="none" variants={draw} custom={1} className="stroke-slate-800 dark:stroke-slate-200" />
      <motion.line x1="360" y1="430" x2="360" y2="570" stroke="#0099ff" variants={draw} custom={2.2} className="stroke-slate-800 dark:stroke-slate-200" />
      <motion.path
        d="M560 340 L420 385 L560 430 L420 475 L560 520"
        stroke="#0099ff"
        variants={draw}
        custom={2}
        fill="none"
        className="stroke-slate-800 dark:stroke-slate-200"
      />
      <motion.circle cx="490" cy="630" r="70" stroke="#0099ff" fill="none" variants={draw} custom={1} className="stroke-slate-800 dark:stroke-slate-200" />
      <motion.circle cx="680" cy="480" r="70" stroke="#0099ff" fill="none" variants={draw} custom={1} className="stroke-slate-800 dark:stroke-slate-200" />
      <motion.path
        d="M700 490 L840 490 L700 630 L840 630"
        stroke="#0099ff"
        variants={draw}
        custom={2}
        fill="none"
        className="stroke-slate-800 dark:stroke-slate-200"
      />
    </motion.svg>
  );
};
