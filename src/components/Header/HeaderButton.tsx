import { useStoreSlideMenu } from '@/hooks/useStore';
import Link from 'next/link';

interface Props {
  name: string;
}

const HeaderButton = ({ name }: Props) => {
  const { isOpen, toggleOpen } = useStoreSlideMenu();

  return (
    <div className={isOpen ? 'block' : 'inline-block'}>
      <Link href={`#${name}`} scroll={false} onClick={isOpen ? toggleOpen : undefined}>
        <button className={`${isOpen ? 'py-16 text-2xl' : 'px-4'} capitalize`}>{name}</button>
      </Link>
    </div>
  );
};

export default HeaderButton;
