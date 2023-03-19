import { IconNames } from '@components/Icons/types';
import useLanguage from '@hooks/useLanguage';
import { useStoreDarkMode, useStoreSlideMenu } from '@hooks/useStore';

type ButtonActions = {
  [key in IconNames]?: (...args: any) => any;
};

const useButtonActions = (): ButtonActions => {
  const { toggleDarkMode } = useStoreDarkMode();
  const { toggleOpen } = useStoreSlideMenu();
  const { currentLanguage, changeLocale, languageList } = useLanguage();

  function openLink(url: string) {
    window.open(url);
  }

  function changeToNextLanguage() {
    const nextIndex = languageList.indexOf(currentLanguage) + 1;
    changeLocale(languageList[nextIndex % languageList.length]);
  }

  const buttonActions: ButtonActions = {
    GitHubIcon: () => openLink('https://github.com'),
    HamburgerIcon: toggleOpen,
    LanguageIcon: changeToNextLanguage,
    LightDarkIcon: toggleDarkMode,
    RightArrowIcon: toggleOpen,
    VelogIcon: () => openLink('https://velog.io'),
  };

  return buttonActions;
};

export default useButtonActions;
