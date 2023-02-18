import { Icons } from '@/components/Icons';
import { IconNames } from '@/components/Icons/types';

interface Props {
  name: IconNames;
}

const IconButton = ({ name }: Props) => {
  const Icon = Icons[name];

  return (
    <button className="mb-2 px-4">
      <Icon />
    </button>
  );
};

export default IconButton;
