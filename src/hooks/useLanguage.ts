import { useRouter } from 'next/router';

const useLanguage = () => {
  const router = useRouter();

  const languageList = ['en', 'ko', 'zh'];
  const currentLanguage = router.locale ?? 'en';
  const nextLanguageIndex = (languageList.indexOf(currentLanguage) + 1) % languageList.length;
  
  const changeLocale = (language: string) => {
    console.log(language)
    router.push(router.basePath, router.basePath, { locale: language, scroll: false });
  };

  return { currentLanguage, changeLocale, languageList, nextLanguageIndex };
};

export default useLanguage;
