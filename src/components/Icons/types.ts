export type IconNames = 'EmailIcon' | 'GitHubIcon' | 'LanguageIcon' | 'LightDarkIcon' | 'PhoneIcon' | 'ShuffleIcon' | 'TalkIcon' | 'VelogIcon';

export type IconOptions = {
  [K in IconNames]: React.ComponentType;
};
