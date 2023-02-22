interface Props {
  language: string;
  changeLocale: (language: string) => void;
}

export const LanguageButton = ({ language, changeLocale }: Props) => {
  return (
    <span onClick={() => changeLocale(language)} className="inline-block pr-3 text-xs transition hover:scale-125 dark:hover:fill-slate-100">
      {language.toUpperCase()}
    </span>
  );
};
