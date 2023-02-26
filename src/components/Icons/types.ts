export type IconNames =
  | 'EmailIcon'
  | 'GitHubIcon'
  | 'HamburgerIcon'
  | 'LanguageIcon'
  | 'LightDarkIcon'
  | 'PhoneIcon'
  | 'RightArrowIcon'
  | 'ShuffleIcon'
  | 'TalkIcon'
  | 'VelogIcon';

export type IconOptions = {
  [K in IconNames]: React.ComponentType;
};
