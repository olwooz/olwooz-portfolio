import GitHubIcon from '../Icons/github';
import LightDarkIcon from '../Icons/light-dark';
import VelogIcon from '../Icons/velog';

interface Props {
  name: string;
}

function getIcon(name: string) {
  switch (name) {
    case 'light-dark':
      return <LightDarkIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'velog':
      return <VelogIcon />;
  }
}

const IconButton = ({ name }: Props) => {
  const icon = getIcon(name);

  return <button className="mb-2 px-4">{icon}</button>;
};

export default IconButton;
