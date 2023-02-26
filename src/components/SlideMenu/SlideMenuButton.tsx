import { useStoreSlideMenu } from '@/hooks/useStore';

interface Props {
  children: React.ReactNode;
}

const SlideMenuButton = ({ children }: Props) => {
  const { toggleOpen } = useStoreSlideMenu();

  return <button onClick={toggleOpen}>{children}</button>;
};

export default SlideMenuButton;
