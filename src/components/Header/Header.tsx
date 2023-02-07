import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <div className="flex justify-between border-gray-900 px-16 py-8">
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
