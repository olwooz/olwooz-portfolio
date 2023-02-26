import { Icons } from '@/components/Icons';
import { IconNames, IconProps } from '@/components/Icons/types';
import useButtonActions from '@/hooks/useButtonActions';
import { ComponentType } from 'react';

interface Props extends IconProps {
  name: IconNames;
  buttonStyle?: string;
}

const IconButton = ({ name, buttonStyle, size, style }: Props) => {
  const buttonActions = useButtonActions();
  const Icon: ComponentType<IconProps> = Icons[name];

  return (
    <button className={buttonStyle} onClick={buttonActions[name]}>
      <Icon size={size} style={style} />
    </button>
  );
};

export default IconButton;
