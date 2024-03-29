import { IconProps } from '@Icons/types';

export const TalkIcon = ({ size, style }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={size ?? 24} className={style}>
      <path d="M80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Zm60-145 75-75h605V236H140v595Zm0-595v595-595Z" />
    </svg>
  );
};
