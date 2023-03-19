import useLanguage from '@hooks/useLanguage';

interface Props {
  language: string;
}

export const LanguageButton = ({ language }: Props) => {
  const { changeLocale } = useLanguage();

  return (
    <span
      onClick={() => changeLocale(language)}
      className="block pb-3 text-xl transition hover:scale-125 dark:hover:fill-slate-100 sm:inline-block sm:pr-3 sm:pb-0 sm:text-xs"
    >
      {language.toUpperCase()}
    </span>
  );
};
