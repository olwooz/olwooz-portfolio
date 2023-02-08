import { useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY < scrollY ? true : false);
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={`fixed z-10 flex w-full justify-between border-2 border-dashed border-gray-400 px-16 py-8 backdrop-blur transition duration-500 ease-in-out ${
        show ? '' : 'transparent'
      }`}
    >
      <div>LOGO</div>
      <div>
        <HeaderButton text="menu 1" />
        <HeaderButton text="menu 2" />
        <HeaderButton text="menu 3" />
      </div>
    </div>
  );
};

export default Header;
