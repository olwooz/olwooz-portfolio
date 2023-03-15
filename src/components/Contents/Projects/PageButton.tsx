import { motion } from 'framer-motion';

interface Props {
  direction: number;
  text: string;
  handleClick: (direction: number) => void;
}

const PageButton = (props: Props) => {
  const { text, direction, handleClick } = props;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => handleClick(direction)}
      className="m-2 h-12 w-12 rounded-lg border-none p-2 text-xl font-black text-white opacity-80 hover:bg-gray-400 hover:bg-opacity-20"
    >
      {text}
    </motion.button>
  );
};

export default PageButton;
