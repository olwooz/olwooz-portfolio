import { IconNames } from '@/components/Icons/types';
import IconButton from '@/components/Buttons/IconButton';

const icons: IconNames[] = ['VelogIcon', 'GitHubIcon', 'LightDarkIcon', 'LanguageIcon'];

const IconGroup = () => {
  return (
    <div className="pb-4">
      {icons.map((icon) => (
        <IconButton key={icon} name={icon} style={'p-4'} />
      ))}
    </div>
  );
};

export default IconGroup;
