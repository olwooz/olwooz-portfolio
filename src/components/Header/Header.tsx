import { useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';

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
    <div
      className={`fixed z-10 flex w-full justify-between border-2 border-dashed border-gray-400 px-16 py-8 backdrop-blur transition duration-500 ease-in-out dark:bg-slate-800 dark:text-slate-200 ${
        show ? '' : 'transparent'
      }`}
    >
      <div>LOGO</div>
      <div>
        <HeaderButton name="main" />
        <HeaderButton name="about" />
        <HeaderButton name="projects" />
        <HeaderButton name="contact" />
      </div>
    </div>
  );
};

export default Header;
