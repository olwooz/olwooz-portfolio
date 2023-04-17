interface Props {
  language: string;
  onClick: (language: string) => void;
}

const LanguageButton = ({ language, onClick }: Props) => {
  return (
    <span
      onClick={() => onClick(language)}
      className="block pb-3 text-xl transition hover:scale-125 dark:hover:fill-slate-100 sm:inline-block sm:pr-3 sm:pb-0 sm:text-xs"
    >
      {language.toUpperCase()}
    </span>
  );
};

export default LanguageButton;
