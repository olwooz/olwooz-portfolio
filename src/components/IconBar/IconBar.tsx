import { IconNames } from '../Icons/types';
import IconButton from './IconButton';
import VerticalLine from './VerticalLine';

type Direction = 'left' | 'right';

interface Props {
  direction: Direction;
  icons: IconNames[];
}

const IconBar = ({ direction, icons }: Props) => {
  const placement = direction === 'left' ? 'left-16 right-auto' : 'left-auto right-16';
  return (
    <div className={`w-40px fixed bottom-0 ${placement}`}>
      <div className="m-0 flex list-none flex-col items-center p-0">
        {icons.map((icon, i) => (
          <IconButton key={i} name={icon} />
        ))}
        <VerticalLine />
      </div>
    </div>
  );
};

export default IconBar;
