import { IconNames } from '@Icons/types';
import { IconButton } from '@Buttons';
import { GENERAL_ICON_STYLE } from '@constants/styles';

const icons: IconNames[] = ['VelogIcon', 'GitHubIcon', 'LightDarkIcon', 'LanguageIcon'];

const IconGroup = () => {
  return (
    <div className="pb-4">
      {icons.map((icon) => (
        <IconButton key={icon} name={icon} buttonStyle={'p-8'} size={36} style={GENERAL_ICON_STYLE} />
      ))}
    </div>
  );
};

export default IconGroup;
