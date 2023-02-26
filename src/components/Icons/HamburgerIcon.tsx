import { IconProps } from './types';

export const HamburgerIcon = ({ size, style }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={size ?? 24} className={style}>
      <path d="M120 816v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};
