import Link from 'next/link';

interface Props {
  wrapperStyle?: string;
  buttonStyle?: string;
  onClick?: (...args: any) => void;
}

const sections = ['main', 'about', 'projects', 'contact'];

const SectionButtons = ({ wrapperStyle, buttonStyle, onClick }: Props) => {
  return (
    <>
      {sections.map((section) => (
        <div key={section} className={wrapperStyle}>
          <Link href={`#${section}`} scroll={false} onClick={onClick}>
            <button className={'capitalize ' + buttonStyle}>{section}</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SectionButtons;
