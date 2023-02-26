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

export interface IconProps {
  size?: number;
  style?: string;
}

export type IconComponent = ({ size, style }: IconProps) => JSX.Element;
