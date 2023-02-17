import Link from 'next/link';

interface Props {
  name: string;
}

const HeaderButton = ({ name }: Props) => {
  return (
    <a href={`#${name}`}>
      <button className="px-4 capitalize">{name}</button>
    </a>
  );
};

export default HeaderButton;
