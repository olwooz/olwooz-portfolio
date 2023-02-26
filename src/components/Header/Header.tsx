import { useEffect, useState } from 'react';
import ButtonGroup from '../Buttons/ButtonGroup';
import SlideMenuButton from '@/components/SlideMenu/SlideMenuButton';
import SlideMenu from '../SlideMenu/SlideMenu';
import { HamburgerIcon } from '../Icons';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY < scrollY);
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div
        className={`fixed z-10 flex w-full justify-between px-16 py-8 shadow-lg backdrop-blur transition duration-500 ease-in-out dark:text-slate-200 ${
          show ? '' : 'transparent'
        }`}
      >
        <div>LOGO</div>
        <div className="hidden sm:block">
          <ButtonGroup />
        </div>
        <div className="sm:hidden">
          <SlideMenuButton>
            <HamburgerIcon />
          </SlideMenuButton>
        </div>
        <SlideMenu />
      </div>
    </>
  );
};

export default Header;
