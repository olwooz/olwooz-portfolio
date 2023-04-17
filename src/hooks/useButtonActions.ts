import { IconNames } from '@Icons/types';
import { useStoreDarkMode, useStoreSlideMenu } from '@hooks/useStore';

type ButtonActions = {
  [key in IconNames]?: (...args: any) => any;
};

const useButtonActions = (): ButtonActions => {
  const { toggleDarkMode } = useStoreDarkMode();
  const { toggleOpen } = useStoreSlideMenu();

  function openLink(url: string) {
    window.open(url);
  }

  const buttonActions: ButtonActions = {
    GitHubIcon: () => openLink('https://github.com/olwooz'),
    HamburgerIcon: toggleOpen,
    LightDarkIcon: toggleDarkMode,
    RightArrowIcon: toggleOpen,
    VelogIcon: () => openLink('https://velog.io/@olwooz'),
  };

  return buttonActions;
};

export default useButtonActions;
