import { Icons } from '@/components/Icons';
import { IconNames } from '@/components/Icons/types';

interface Props {
  name: IconNames;
  style: string;
}

const IconButton = ({ name, style }: Props) => {
  const Icon = Icons[name];

  return (
    <button className={style}>
      <Icon />
    </button>
  );
};

export default IconButton;
