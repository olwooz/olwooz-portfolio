import { useEffect, useState } from 'react';
import { SectionButtons, IconButton } from '@Buttons';
import SlideMenu from '@SlideMenu';
import { GENERAL_ICON_STYLE } from '@constants/styles';

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
        <div className=" h-[30px] w-[100px]"></div>
        <div className="hidden sm:block">
          <SectionButtons wrapperStyle="inline-block" buttonStyle="px-4" />
        </div>
        <div className="sm:hidden">
          <IconButton name="HamburgerIcon" size={36} style={GENERAL_ICON_STYLE} />
        </div>
        <SlideMenu />
      </div>
    </>
  );
};

export default Header;
