import { ReactElement } from 'react';
import HeaderButton from '../Header/HeaderButton';

interface Props {
  buttonType: ReactElement;
}

const ButtonGroup = () => {
  return (
    <>
      <HeaderButton name="main" />
      <HeaderButton name="about" />
      <HeaderButton name="projects" />
      <HeaderButton name="contact" />
    </>
  );
};

export default ButtonGroup;
