import { IconNames } from '@/components/Icons/types';
import IconButton from '@/components/Buttons/IconButton';
import { iconStyle } from '@/constants/styles';

const icons: IconNames[] = ['VelogIcon', 'GitHubIcon', 'LightDarkIcon', 'LanguageIcon'];

const IconGroup = () => {
  return (
    <div className="pb-4">
      {icons.map((icon) => (
        <IconButton key={icon} name={icon} buttonStyle={'p-8'} size={36} style={iconStyle} />
      ))}
    </div>
  );
};

export default IconGroup;
