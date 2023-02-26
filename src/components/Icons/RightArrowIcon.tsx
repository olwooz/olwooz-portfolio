import { IconProps } from './types';

export const RightArrowIcon = ({ size, style }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={size ?? 24} className={style}>
      <path d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z" />
    </svg>
  );
};
