import Link from 'next/link';
import { useStoreSlideMenu } from '@/hooks/useStore';

interface Props {
  name: string;
}

const MenuButton = ({ name }: Props) => {
  const { toggleOpen } = useStoreSlideMenu();

  return (
    <div className="block">
      <Link href={`#${name}`} scroll={false} onClick={toggleOpen}>
        <button className="py-16 text-2xl capitalize">{name}</button>
      </Link>
    </div>
  );
};

export default MenuButton;
