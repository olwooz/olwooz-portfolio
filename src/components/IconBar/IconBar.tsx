import { IconNames } from '../Icons/types';
import IconButton from '../Buttons/IconButton';
import VerticalLine from './VerticalLine';
import { iconStyle } from '@/constants/styles';

type Direction = 'left' | 'right';

interface Props {
  direction: Direction;
  icons: IconNames[];
}

const IconBar = ({ direction, icons }: Props) => {
  const placement = direction === 'left' ? 'left-16 right-auto' : 'left-auto right-16';
  return (
    <div className={`w-40px fixed bottom-0 hidden sm:block ${placement}`}>
      <div className="m-0 flex list-none flex-col items-center p-0">
        {icons.map((icon, i) => (
          <IconButton key={i} name={icon} buttonStyle={'mb-2 px-4'} style={iconStyle} />
        ))}
        <VerticalLine />
      </div>
    </div>
  );
};

export default IconBar;
