import { motion } from 'framer-motion';
import { draw } from '@utils/draw';

export const Alphabets = () => {
  return (
    <motion.svg width="1000" height="600" viewBox="0 -100 600 600" initial="hidden" animate="visible">
      <motion.circle cx="100" cy="150" r="70" stroke="#0099ff" variants={draw} custom={1} />
      <motion.line x1="210" y1="80" x2="210" y2="220" stroke="#0099ff" variants={draw} custom={2.2} />
      <motion.path d="M380 0 L240 45 L380 90 L240 135 L380 180" stroke="#0099ff" variants={draw} custom={2} fill="none" />

      <motion.circle cx="310" cy="280" r="70" stroke="#0099ff" variants={draw} custom={2} />

      <motion.circle cx="480" cy="150" r="70" stroke="#0099ff" variants={draw} custom={1} />
      <motion.path d="M550 160 L640 160 L500 300 L640 300" stroke="#0099ff" variants={draw} custom={2} fill="none" />
    </motion.svg>
  );
};
